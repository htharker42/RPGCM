import React from "react"
import PropTypes from "prop-types"

export class Dndraceselector extends React.Component {
  componentDidMount() {
          console.log('Component mounted');
          console.log(this.props.races)
      }

    constructor(props){
      super(props)
      this._handleChange = this._handleChange.bind(this);
      this._parser = this._parser.bind(this);
    }

    _handleChange(e){
      var dndrace = e.target.value;
      var dndRaceId = e.target.id - 1;
      console.log(dndRaceId);
      this.props.onChange(dndrace, dndRaceId)
    }

    _parser(raceMods){
      const raceArray = raceMods.split(",");
      let mods = raceArray.map((mod)=>{
        if(mod[0] === "["){
          mod = mod;
        }else{
          mod = eval(mod);
        }
          //console.log(mod)
        return (mod);
      })
    }

    render() {
      var raceForm = this.props.races.map((dndrace)=>{
        //this._parser(dndrace.raceMods);
        return(
            <input key={dndrace.id} id= {dndrace.id} type = "button" value = {dndrace.name} onClick= {this._handleChange} />
        )
      }
    );

      return(
        <div className= "dndRacebutton">
          {raceForm}
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
