import React from "react";
import PropTypes from "prop-types";
import Axios from 'axios';
import { HandleBaseStats } from "./handleBaseStats";
import { Dndraceselector } from "./Dndraceselector";
import { Dndclassselector } from "./Dndclassselector";
import { Dndforminput } from "./Dndforminput";
//import { Api } from "./api";
import { ImageUpload } from "./Imageuploader";
import MyImage from "default.jpg";


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
                      raceImage: "default.jpg",
                      statPool: 30,
                      stats: ["str", "dex", "con","int","wis","cha"],
                      speed: 0,
                      passivePerception: 0,
                      speedMod: 0,
                      passivePerceptionMod: 0,
                      subRaceName: "",
                      playerClass: 0,
                      playerLevel: 1,
                      playerHitPoints: 0,
                      playerExp: 0
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
    this.handleChangeClass = this.handleChangeClass.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    //Api.post( '.', {character: this.state.character}) //TODO finish custom API to handle POST requests: BUG: cross site computational trust fail via UserToken
    //bundle state data into character object and pass back to Character Model
    let requestType;
    this.props.character.id != null ? requestType = "PUT": requestType = "POST";

    let character= {};
    let keyID;
    for(keyID of Object.keys(this.props.character)){
      character[keyID] = this.state[keyID];
    }

  $.ajax({
      url: ".",
      dataType: 'HTML',
      type: requestType,
      data: {character: character},
      success: (response) => { console.log('it effing worked!', response);},
      error: (response, status, err)=> { console.log("there was an error", err) }
    })
  }

handleChangeForm(keyID, value){
  this.setState({[keyID]: value}) //pass to display value
}

handleStatChange(statName, statMod, statPool){
    let mod = statName + "mod";
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

handleChangeClass(classId){
  classId = classId -1;
  let playerClassChoice = this.props.dndclasses[classId];
  let hitpoints = playerClassChoice.hitpointbase + (Math.floor(Math.random() * playerClassChoice.hitpointmodifier) * this.state.playerLevel)
  console.log(hitpoints)

  this.setState({
    playerClass: classId,
    playerHitPoints: hitpoints
      });
  console.log(this.state.playerClass)
}

handleChangeRace(race, id, subRaceName, attributeMods, mode){
    let image = `${race.toLowerCase()}.png`
    if (mode === "POST"){
      this.setState({race: race, subRaceName: "", raceImage: image})
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

      let playerClass = this.props.dndclasses[this.state.playerClass];
      let profsObj = JSON.parse(playerClass.proficiencies);

    return (

      <div>
        <form className="dndForm">
        <div className= "characterStats">
          <h2>Character Sheet:</h2>
            <img src={MyImage} alt="player's race"/>
            <Dndforminput
              name="name"
              value={this.state.name}
              onChange={this.handleChangeForm}
              />
            <h3>Race: {this.state.subRaceName} {this.state.race} </h3>
              <br />
            <h3>Class:{playerClass.name.toUpperCase()}</h3>
            <h4>Level: {this.state.playerLevel}</h4>
            <h5>Experience: {this.state.playerExp}</h5>
            <h4>Hit Points: {this.state.playerHitPoints}</h4>

          </div>

        <div className="characterStats">
          <h2>Attribute Pool: {this.state.statPool}</h2>
          {characterStats}
        </div>

        <div className="characterStats">
          <h2>Speed: {this.state.speedMod}</h2>
          <h2>Passive Perception: {this.state.passivePerceptionMod}</h2>
        </div>


        <div className="characterStats">
          <h2>Notes: </h2>
                  <Dndforminput
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChangeForm}
                    />
        </div>
            <div>
              <Dndraceselector
                character={this.props.race}
                races={this.props.dndraces}
                onChange={this.handleChangeRace}/>
            </div>

            <div>
              <Dndclassselector
                classes={this.props.dndclasses}
                onChange={this.handleChangeClass}/>
            </div>

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
