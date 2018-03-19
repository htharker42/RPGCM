import React from "react"
import PropTypes from "prop-types"
class Dndraceselector extends React.Component {
  componentDidMount() {
          console.log('Component mounted');
      }

  constructor(props){
    super(props)
      this.state = {
                    races: this.props.data,
                    character: this.props.character
                  }

    this.handleChangeRace = this.handleChangeRace.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeRace(e){
    this.setState({race: e.target.value})
  }

  handleChangeName(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    var characterData = {character: this.state.character}
    e.preventDefault()
    $.ajax({
      url: "",
      dataType: 'JSON',
      type: 'POST',
      data: {character: characterData},
      success: function(character){
        this.setState({character: character});
        }.bind(this),
        error: function(response, status, err) {
          console.log("an error has occured")
        }
      }

    )
  }

  render() {
//test vars
    const stringCharacter = JSON.stringify(this.state.character)
    //const stringProps = JSON.stringify(this.state.races);
    //const testname1 = this.state.races[1].name;
    //const arrayLength = this.state.races.length - 1

    var raceForm = this.state.races.map((dndrace)=>{
      return(
        <div class= "racebutton">
          <input type = "button" value = {dndrace.name} onClick= {this.handleChangeRace} />
        </div>
      )});

var test_if = "false";
      if (this.state.character.id == null){
        test_if = "true"
      }else{

      }


    return(

  <div class="characterform">
    <h2>{test_if}</h2>
    <h1>{this.state.name}</h1>
    <h3>{this.state.race} </h3>


      <form>
        <label >Choose Profile Image</label>
        <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png" />
        <br />
        <input type = "text" value = {this.state.character.name} onChange={this.handleChangeName}/>
        <br />
        <div>
              {raceForm}
        </div>
        <input type = "submit" value = {this.state.character} onClick={this.handleSubmit} />
      </form>

  </div>
);
  }
}
/*
Dndraceselector.propTypes = {
  race: PropTypes.array
};
*/
export default Dndraceselector
