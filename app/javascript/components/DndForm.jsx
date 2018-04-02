import React from "react";
import PropTypes from "prop-types";
import Axios from 'axios';
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
                      image: {}
                    }
                    let keyID;
                    for(keyID of Object.keys(this.props.character)){
                        this.state[keyID]= this.props.character[keyID];
                    }
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

  //console.log(character)
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

  handleChangeRace(race, id){
    let dndRace = {}
    let modsArray = ["str", "dex", "con","int","wis","cha","speed","passivePerception"];
    dndRace = this.state.dndraces[id];
    let dndRaceMods = dndRace.raceMods.split(",");
    let mods = dndRaceMods.map((mod)=>{
      if(mod[0] === "["){
        mod = mod;
      }else{
        mod = eval(mod);
      }
      return(mod);
    })

    let x = 0;
    let baseStat;
    modsArray.forEach((mod) => {
        baseStat = this.state[mod] + mods[x];
        this.setState({[mod]: baseStat})
        x+=1;
      })

    this.setState({race: race})
    console.log(mods);
    console.log(this.state.str)
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
    let keyID;

    return (
      <div>

        <h1>Character Sheet:</h1>
        <h1>Character Name: {this.state.name}</h1>
        <h2>Character Description: {this.state.description} </h2>
        <h2>Character Race: {this.state.race}</h2>
        <div id="Base Attributes">
          <h3>Str: {this.state.str}</h3>
          <h3>Dex: {this.state.dex}</h3>
          <h3>Con: {this.state.con}</h3>
          <h3>Int: {this.state.int}</h3>
          <h3>Wis: {this.state.wis}</h3>
          <h3>Cha: {this.state.cha}</h3>
          <h3>Speed: {this.state.speed}</h3>
          <h3>Passive Perception: {this.state.passivePerception}</h3>
        </div>
        <form className="dndForm">

              <Dndforminput
                name="name"
                value={this.state.name}
                onChange={this.handleChangeForm}
                />

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
