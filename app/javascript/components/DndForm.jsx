import React from "react";
import PropTypes from "prop-types";
import Axios from 'axios';
import { HandleBaseStats } from "./handleBaseStats";
import { Dndraceselector } from "./Dndraceselector";
import { Dndclassselector } from "./Dndclassselector";
import { Dndforminput } from "./Dndforminput";
import { SavingThrows } from "./SavingThrows";
//import { Api } from "./api";
import { ImageUpload } from "./Imageuploader";
import MyImage from "default.jpg";
import { CharacterSkills } from "./CharacterSkills"
import {Inventory} from "./Inventory"
import { SelectAlignment } from "./SelectAlignment"

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
                      playerClass: 0, //use Integer to ID class ID = class.id - 1
                      playerLevel: 1,
                      playerHitPoints: 10,
                      playerExp: 0,
                      alignment: "neutral",
                      skills: " "
                      cards = [0,1,2,3,4,5,6];
                    }

                    let keyID;
                    for(keyID of Object.keys(this.props.character)){
                        this.state[keyID]= this.props.character[keyID];
                    }

                    //key attribute Modifier

                    let modArray =[];
                    let saveArray =[];
                    this.state.stats.forEach((stat)=>{
                      let modName = (stat+"Mod");
                      let saveName = (stat+"Save");
                      this.state[modName] = 0;
                      this.state[saveName] = Math.round((Math.random()*Math.ceil(20)));

                      modArray.push(this.state[modName]);
                      saveArray.push(this.state[saveName]);
                    })
                    this.state.modArray = modArray;
                    this.state.saveArray = saveArray;

    this._handleAttributeModsArray = this._handleAttributeModsArray.bind(this)
    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleChangeRace = this.handleChangeRace.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleChangeClass = this.handleChangeClass.bind(this);
  }

  _handleCardChange(cardID, direction){

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
  let modValueArray = [];
  modsArray.forEach((mod) => {
      this.setState({[mod]: attributes[x]});
      modValueArray.push(attributes[x]);
      x+=1;
    });
    this.setState({modArray: modValueArray});
}

handleChangeClass(classId){
  classId = classId -1;
  let playerClassChoice = this.props.dndclasses[classId];
  let hitpoints = playerClassChoice.hitpointbase + (Math.floor(Math.random() * playerClassChoice.hitpointmodifier) * this.state.playerLevel)
  console.log(hitpoints)

  this.setState({
    playerClass: classId,
    playerHitPoints: hitpoints,
    skills: this.props.dndclasses[classId].skills
      });
  console.log(this.state.playerClass)
}

handleChangeRace(race, id, subRaceName, attributeMods, mode){
    let image = `${race.toLowerCase()}.png`
    if (mode === "POST"){
      this.setState({race: race, subRaceName: "", raceImage: image})
    } else if (mode === "PATCH"){
      this.setState({ hasSubRace: true,
          subRaceName: subRaceName})
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
      console.log(playerClass)
      //let profsObj = JSON.parse(playerClass.proficiencies);

    return (

      <div className="dndForm">

        <div className= "characterName">
          <Dndforminput
            name="name"
            value={this.state.name}
            onChange={this.handleChangeForm}
            />
        </div>
        <div className="characterHeader">
          <div className="headerItem">
              <h5>{playerClass.name.toUpperCase()}</h5>
            </div>
              <div className="headerItem">
                <h5>placeholder background</h5>
            </div>
            <div className="headerItem">
              <h5>{this.state.playerLevel}</h5>
            </div>
            <div className="headerItem headerLable">
              <h6>Class</h6>
            </div>
            <div className="headerItem headerLable">
              <h6>Background</h6>
            </div>
            <div className="headerItem headerLable">
              <h6>Level</h6>
            </div>
            <div className="headerItem">
              <h5>{this.state.alignment}</h5> <button>V</button>
            </div>
            <div className="headerItem">
              <h5>{this.state.subRaceName}{this.state.race}</h5>
            </div>
            <div className="headerItem">
              <h5>{this.state.playerExp}</h5>
            </div>
            <div className="headerItem headerLable">
              <h6>Race</h6>
            </div>
            <div className="headerItem headerLable">
              <h6>Alignment</h6>
            </div>
            <div className="headerItem headerLable">
              <h6>Experience</h6>
            </div>
            <div className="headerItem">
              <h6> Inspiration: {this.state.inspiration}
            </h6>
          </div>
            <div className="headerItem">
              <h6> Proficiency Bonus: {this.state.proficiencyBonus}
             </h6>
           </div>
            <div className="headerItem">
              <h6> Perception: {this.state.perception}
             </h6>
           </div>
           <div className="headerItem">
             <h6>Armor Class: {this.state.armorClass}</h6>
          </div>
          <div className="headerItem">
             <h6>Initative: {this.state.dexMod}</h6>
             </div>
             <div className="headerItem">
             <h6>Speed: {this.state.speed}</h6>
             </div>
             <div className="headerItem">
             <h6>Hitpoints: {this.state.playerHitPoints}</h6>
             </div>
             <div className="headerItem">
             <h6>Hit Dice: 00 </h6>
             </div>
             <div className="headerItem">
             <h6>Wisdom: {this.state.passivePerception}</h6>
             </div>
             <div className="headerItem">
             <h6>Death Saves </h6>
             </div>
             <div className="headerItem">
             <h6>Success: 0-0-0</h6>
             </div>
             <div className="headerItem">
             <h6>Failures: 0-0-0</h6>
             </div>

        </div>
          <div className="characterAttributes">
            <h3>Attribute Pool: {this.state.statPool}</h3>
            {characterStats}
          </div>

        <div className="column2 singleStat savingThrows">
          <h4>  Saving Throws </h4>
            <SavingThrows
              modArray = {this.state.modArray}
              saveArray = {this.state.saveArray}
              stats = {this.state.stats}
              />
        </div>

        <div className="column2 singleStat alignment">
          <h4>  Alignment </h4>
            <SelectAlignment
              name="alignment"
              onChange = {this.handleChangeForm}
              />
        </div>

        <div className="column2 singleStat skills">
          <h4>  Skills </h4>
          <CharacterSkills
            skills = {this.state.skills}
            />

        </div>

        <div className="column2 chooseRace">
            <h5>Select Race</h5>
              <Dndraceselector
                character={this.props.race}
                races={this.props.dndraces}
                onChange={this.handleChangeRace} />
        </div>

        <div className="column2 chooseRace chooseClass">
            <h5>Select Class</h5>
          <div>
            <Dndclassselector
              classes={this.props.dndclasses}
              onChange={this.handleChangeClass} />
          </div>

        </div>

        <div className="column3 attacks">
          <div className="attackandspells">
              <h4>Attack : Name : Damage</h4>
              <h4>Attack : Name : Damage</h4>
              <h4>Attack : Name : Damage</h4>
              <h4>Attack : Name : Damage</h4>
          </div>
          <div className="asLabel">
            <h6>Attacks and Spell Casting</h6>
          </div>
        </div>

        <div className="column3 attacks equip">
          <div className="attackandspells equipmentList">
              <h4>CP</h4><h4>description</h4>
          </div>
          <div className="asLabel">
            <h6>Equipment</h6>
          </div>
        </div>

        <div className="column4 descriptions personalityContainer">
          <Dndforminput
            name="Personality Traits"
            value={this.state.personalityTraits}
            onChange={this.handleChangeForm}
            />

            <div className="itemLabel">
              <h6>Personality Traits</h6>
          </div>

          <Dndforminput
            name="Ideals"
            value={this.state.ideals}
            onChange={this.handleChangeForm}
            />
          <div className="itemLabel">
            <h6>Ideals</h6>
        </div>

        <Dndforminput
          name="Bonds"
          value={this.state.bonds}
          onChange={this.handleChangeForm}
          />

        <div className="itemLabel">
          <h6>Bonds</h6>
      </div>

          <Dndforminput
            name="Flaws"
            value={this.state.flaws}
            onChange={this.handleChangeForm}
            />

      <div className="itemLabel">
        <h6>Flaws</h6>
    </div>

  </div>

  <div className="column4 featuresAndTraits">
      <Dndforminput
        name="description"
        value={this.state.description}
        onChange={this.handleChangeForm}
        />
    <div className="asLabel">
      <h6>Features and Traits</h6>
    </div>
  </div>
  <div className="submitButton">
     <input type="submit"
      value="Create Character"
      onClick={this.handleSubmit}/> </div>

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
