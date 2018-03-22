import React from "react";
import PropTypes from "prop-types";
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
                      dndraces: this.props.dndraces
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
  console.log(character)
let requestType;
this.props.character.id != null ? requestType = "PUT": requestType = "POST";

  $.ajax({
      url: ".",
      dataType: 'JSON',
      type: requestType,
      data: {character: character},
      success: (response) => { console.log('it effing worked!', response);},
      error: function(response, status, err) { console.log("there was an error", err) }
    });
}

handleChangeForm(keyID, e){
  this.setState({[keyID]: e}) //pass to display value
}

  handleChangeRace(e){
    this.setState({race: e})
  }
  handleImage(e){
    let lgth = e.length-1;
    let filetype = e.substr(lgth, -3);
        console.log(selectedFile);
        console.log(e);
        console.log(lgth);
        console.log(filetype);
    this.setState(image_content_type: filetype);
    this.setState(image_file_name: e);
    //this.setState(image_file_size: null );
    //this.setState(image_updated_at: null );
  }

  render(){
    let keyID;

    return (
      <div>
        <h1>Character Sheet:</h1>
        <h1>Character Name: {this.state.name}</h1>
        <h2>Character Description: {this.state.description} </h2>
        <h2>Character Race: {this.state.race}</h2>
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

              <ImageUpload
                name = "image_content_file"
                onChange={this.handleImage} />

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
