import React from "react";
import PropTypes from "prop-types";
import Axios from 'axios';
import { HandleBaseStats } from "./handleBaseStats";
import { Dndraceselector } from "./Dndraceselector";
import { Dndforminput } from "./Dndforminput";
//import { Api } from "./api";
import { ImageUpload } from "./Imageuploader";

class DndForm extends React.Component {
  debugger;
  constructor(props){
    super(props)

    //create standard state objects:
    //Character dataset will be very large and dynamic
    //dynamically create state values for each value in the Character Object
    //Bug fix for issues with state.character.value not updating correctly
            this.state={
                      character: this.props.character, //character object will be update the Character Model.
                      dndraces: this.props.dndraces,
                      image: {},
                      statPool: 30,
                      stats: ["str", "dex", "con","int","wis","cha"],
                      speed: 0,
                      passivePerception: 0,
                      speedMod: 0,
                      passivePerceptionMod: 0,
                      subRaceName: ""
                    }

                    let keyID;
                    for(keyID of Object.keys(this.props.character)){
                        this.state[keyID]= this.props.character[keyID];
                    }
                    //key attribute Modifier
                    this.state.stats.forEach((x)=>{
                      let modName = (x+"Mod")
                      this.state[modName] = 0
                    })
    this._handleAttributeModsArray = this._handleAttributeModsArray.bind(this)
    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleChangeRace = this.handleChangeRace.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    //Api.post( '.', {character: this.state.character}) //TODO finish custom API to handle POST requests: BUG: cross site computational trust fail via UserToken
    //bundle state data into character object and pass back to Character Model
    let character= {};
    let keyID;
    for(keyID of Object.keys(this.props.character)){
      character[keyID] = this.state[keyID];
    }

  let requestType;
  this.props.character.id != null ? requestType = "PUT": requestType = "POST";
  $.ajax({
      url: ".",
      dataType: 'HTML',
      type: requestType,
      data: {character: character},
      success: (response) => { console.log('it effing worked!', response);},
      error: function(response, status, err) { console.log("there was an error", err) }
    })
  }

handleChangeForm(keyID, e){
  this.setState({[keyID]: e}) //pass to display value
}

handleStatChange(statName, statMod, statPool){
    let mod = statName + "mod";
    console.log(mod);

    this.setState({[statName]: statMod});
    this.setState({statPool: statPool});
    }

_parser(mods){
  mods = mods.map((mod)=>{
    isNaN(mod)? mod = mod.split(",") : mod = eval(mod);
    return(mod);
    })
  return(mods);
}

_handleAttributeModsArray(attributes){
  let modsArray = ["strMod", "dexMod", "conMod","intMod","wisMod","chaMod","speedMod","passivePerceptionMod"];
  let x = 0;
  modsArray.forEach((mod) => {
      this.setState({[mod]: attributes[x]})
      x+=1;
    });
}

handleChangeRace(race, id, subRaceName, attributeMods, mode){
    console.log(attributeMods)
    if (mode === "POST"){
      this.setState({race: race, subRaceName: subRaceName})
    } else if (mode === "PATCH"){
      this.setState({subRaceName: subRaceName})
    }
    this._handleAttributeModsArray(attributeMods)
  }

  handleImage(e){
    this.setState({image: e});
    //this.setState({image_file_name: e.name });
    //this.setState({image_content_type: e.type, image_file_size: e.size, image_updated_at: e.lastModifiedDate});

        var formData = new FormData();
        formData.append('file', e);
        formData.append('image_file_name', e.name);

        let dataset ={};
        dataset = {character: this.state.image};
        console.log(dataset)
        $.ajax({
            method: "POST",
            url: '.',
            data: dataset,
            dataType: 'json',
            cache: false,
            processData: false,
            contentType: false
        }).then((response) => {
          response.json().then((body) => {
          this.setState({ image_file_name: `${body.file}` });
          //this.setState({image_content_type: e.type, image_file_size: e.size, image_updated_at: e.lastModifiedDate});
          console.log(this.state)
        });
      });
    }

  render(){

    let characterStats = this.state.stats.map((stat)=>{
      let statModifier = stat+"Mod";
      this.state[stat] === null ? this.setState({[stat]: Math.floor(Math.random() * Math.floor(12))}): this.state[stat];
      return(
          <div className="statline">
              <HandleBaseStats
                statModifier = {this.state[statModifier]}
                stat = {stat}
                statPool={this.state.statPool}
                statValue = {this.state[stat]}
                onClick = {this.handleStatChange}
                />
          </div>
        )
      })

    return (
      <div>
        <div className= "characterHeader">
          <h2>Character Sheet:</h2>
            <Dndforminput
              name="name"
              value={this.state.name}
              onChange={this.handleChangeForm}
              />
          <h3>Race: {this.state.race} {`| ${this.state.subRaceName}`}</h3>
        </div>
        <div className="characterStats">
          <h3>Attribute Pool: {this.state.statPool}</h3>
          {characterStats}
          <h3>Speed: {this.state.speedMod}</h3>
          <h3>Passive Perception: {this.state.passivePerceptionMod}</h3>
        </div>
        <form className="dndForm">
              <Dndforminput
                name="description"
                value={this.state.description}
                onChange={this.handleChangeForm}
                />

              <Dndraceselector
                character={this.props.race}
                races={this.props.dndraces}
                onChange={this.handleChangeRace}/>

            <input type="submit"
              value="Create Character"
              onClick={this.handleSubmit}/>
        </form>
    </div>
    )
  }

}

DndForm.propTypes = {
  character: PropTypes.object,
  race: PropTypes.object
};
export default DndForm
