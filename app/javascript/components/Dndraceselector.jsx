import React from "react"
import PropTypes from "prop-types"
class Dndraceselector extends React.Component {
  componentDidMount() {
          console.log('Component mounted');
      }

  constructor(props){
    super(props)
    this.state = {races: this.props.data,
                  name: this.props.data.name,
                  character: this.props.character
                }
  }

  render() {
    const stringCharacter = JSON.stringify(this.state.character)
    const stringProps = JSON.stringify(this.state.races);
    const testname1 = this.state.races[1].name;
    const arrayLength = this.state.races.length - 1
    var data = this.state.races.map((item)=>{
      var image_path = "app/assets/images/" + item.image + ".png"
      return(
        <div class= "race selector">
              <h3>{item.name}</h3>
        </div>
      )});
    return(
  <div class="characterform">
      <h3> {stringProps}{testname1}{arrayLength}{stringCharacter}</h3>
      <form>
        <label >Choose Profile Image</label>
        <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png" />
        <br />
        <input type = "text" name = "Character Name" placeholder="Character Name" />
        <br />
        <div>
          {data}
        </div>
        <input type = "submit" value = "Create Character" />
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
