import React from "react"
import PropTypes from "prop-types"
//import { Dndhandlesubraces } from "./Dndhandlesubraces"
//TODO refactor subrace to stateless class, finish commenting functions, refactor to stateless


export class Dndraceselector extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          clicked: "",
          raceName: "",
          hasSubRaces: false,
          subRaces: [],
          subRace: "",
          subRaceName: "",
          attributeMods: [],
          attributeModsSubRace: [0,0,0,0,0,0,0,"nil"],
          packagedMods: [],
        }

      this._resetSelection = this._resetSelection.bind(this);
      this._handleAttributeMods = this._handleAttributeMods.bind(this);
      this._packMods = this._packMods.bind(this);
      this._handleChange = this._handleChange.bind(this);
      this.handleSubRaces = this._handleSubRaces.bind(this);
      this._handleSubRaceSelection = this._handleSubRaceSelection.bind(this);
    }

    _parser(mods){
      //input mod string : converts string to array : returns array
      mods = mods.map((mod)=>{
          isNaN(mod)? mod = mod.trim() : mod = eval(mod); //handle string and numbers differently
        return(mod);
        })
      return(mods);
    }

    _handleSubRaces(subRaces){
      if (subRaces != "nil"){
        //input subRace string:  parse by seperator and send to _parser to convert to array : return array of all subRaces
        subRaces = subRaces.split("|"); //divide up subRaces
        //pass divided strings to string parser
        subRaces = subRaces.map((subRace)=>{
          subRace = this._parser(subRace.split(","));
          return(subRace);
          })
        this.setState({hasSubRaces: true, subRaces: subRaces});
        return(subRaces)
    }else{
        this.setState({hasSubRaces: false})
      }
    }

    _handleAttributeMods(mods, mode){
      //input attribute mods and mode to deliniate handeling : processes singular mods : return array of all applied mods
      mods = this._parser(mods.split(","))
      if(mode === "attributeModsSubRace"){
        let subRaceName = mods[0];
        mods = mods.slice(1); //remove sub race name from array
        mods = this._packMods(mods);
      }else {
        this.setState({attributeMods: mods});
      }
      return(mods);
    }

    _handleSubRaceSelection(e){
        var attributeMods = []; //reset attributeMods everytime button is clicked
        attributeMods = this._handleAttributeMods(e.target.id, "attributeModsSubRace");
        this.props.onChange( this.state.raceName, "", e.target.value, attributeMods, "PATCH");
    }

  _packMods(subRaceMods){
      //if user selects subRace add Modifications to race Modifications to send back to form
        var count = 0;
        var modsArray = this.state.attributeMods.map((mod)=>{
          if (isNaN(mod) === true){
            //convert strings to comma deliniated format
            mod = this.state.attributeMods[count] + "," + subRaceMods[count];
          }else{
            mod = this.state.attributeMods[count] + subRaceMods[count];
          }
          count += 1;
          return mod;
        })
        return(modsArray);
      }


  _resetSelection(){
    this.setState({
      subRaceName: "Not Selected",
      attributeModsSubRace: [0,0,0,0,0,0,0,"nil"]
    })
  }

    _handleChange(e){
      let dndrace = e.target.value;
      let dndRaceId = e.target.id - 1;
      let race = this.props.races[dndRaceId];
      let skillMods = race.skillMods;
      let resistanceMods = race.resistanceMods;

      let dndRaceMods = [];
      this._resetSelection() //nullify any subrace selections
      let attributeMods = this._handleAttributeMods(race.raceMods, "attributeMods")

      let subRaces;
      race.hasSubRaces? subRaces = race.subRaces : subRaces = "nil";

      subRaces = this._handleSubRaces(subRaces);

      this.props.onChange(
        dndrace,
        dndRaceId, "Not Selected",
        attributeMods, "POST");
    }

    render() {

      var raceForm = this.props.races.map((dndrace)=>{
        return(
          <div className = "racemenu">
            <input
              key={dndrace.id}
              id= {dndrace.id}
              type = "button"
              value = {dndrace.name}
              onClick= {this._handleChange} />
          </div>
        )
      }
    );

    if(this.state.hasSubRaces === true){
    var subRaces = this.state.subRaces.map((subRace)=>{
          let subRaceName = subRace[0].trim();
          return(
            <div className = "subRacemenu">
              <input type = "button"
                key={subRaceName}
                value={subRaceName}
                id={subRace}
                onClick = {this._handleSubRaceSelection}/>
            </div>
          )
        })
      }else{
      }

      return(

        <div className= "characterStats" >
          {raceForm}
          <br />
          {subRaces}
        </div>
    )
  }
}
/*
Dndraceselector.propTypes = {
  race: PropTypes.array
};
*/
//export default Dndraceselector
