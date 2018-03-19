import React from "react";
import PropTypes from "prop-types";
import { Dndraceselector } from "./Dndraceselector";
import { Dndforminput } from "./Dndforminput";
import { Api } from "./api";

class DndForm extends React.Component {
  debugger;
  constructor(props){
    super(props)
  
    //create standard state objects: 
            this.state={
                      character: this.props.character, //character object will be update the Character Model. 
                      dndraces: this.props.dndraces
                    }
                    //Character dataset will be very large and dynamic 
                    //dynamically create state values for each value in the Character Object
                    //Bug fix for issues with state.character.value not updating correctly 
                    let keyID;
                    for(keyID of Object.keys(this.props.character)){
                      if (this.props.character[keyID] == null){
                        this.state[keyID] = `Enter ${keyID}`;
                      }else{
                        this.state[keyID]= this.props.character[keyID]; 
                      }
                    }
                    console.log(this.state)
                    console.log(this.state.user_id)
                    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRace = this.handleChangeRace.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    //Api.post( '.', {character: this.state.character}) //TODO finish custom API to handle POST requests: BUG: cross site computational trust fail via UserToken 
    //bundle state data into character object and pass back to Character Model
    let characterStat = {};
    for(keyID of Object.keys(this.props.character)){
      characterStat = {keyID: this.state[keyID]};  //prepackage object
      this.setState({character: characterStat})
    }
    $.ajax({
      url: ".", 
      dataType: 'JSON',
      type: 'POST',
      data: this.state.character, 
      success: (response) => { console.log('it effing worked!', response, this.state.character);},
      error: function(response, status, err) { console.log("there was an error", err) }
    });
    }
    
    
  handleChange(e){
    let datum = e.target.value;
    let keyID = e.target.name;
    console.log(this.state.name);
    this.setState({[keyID]: datum}) //pass to display value
  }
  
  handleChangeRace(e){
    var raceObj = {race: e}
    this.setState({character: raceObj})
  }
  
  render(){
    return (
      <div>
        <h1>Character Sheet</h1>
        <h1>Character Name: {this.state.name}</h1>
        <h2>Character Description: {this.state.description} </h2>
        <h2>Character Race: {this.state.race}</h2>
        <form className="dndForm">
              <h4>Character Name: {this.state.name}</h4>
              <input type = "text" name = "name" value = {this.state.name} onClick= {this.handleChange} />
            //  <Dndforminput name="name" value={this.state.name} onChange={this.handleChange} />
            //  <br/>
            //  <Dndforminput name="description" value={this.state.description} onChange={this.handleChange} />
              <Dndraceselector character={this.state.race} races={this.state.dndraces} onChange={this.handleChangeRace}/>
              <input type="submit" value="Create Character" onClick={this.handleSubmit}/> 
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
