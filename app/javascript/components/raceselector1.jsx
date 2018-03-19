import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class RaceSelector extends React.Component {
  componentDidMount() {
          console.log('Component mounted');
      }

    constructor(props){
      super(props)
      this.state = {
                    races: this.props.dndrace,
                    character: this.props.character,
                    image: "app/assets/images/default.jpg"
                  }
    this.handleChangeRace = this.handleChangeRace.bind(this);
    }

    handleChangeRace(e){
      var raceObj = {race: e.target.value}
      this.setState({character: raceObj})
    }

    render() {
      var races = this.state.races.id.map((dndraces)=>{
        return(
              <div class="raceButton">
              <input type="button" value = {dndraces.name} onClick={this.handleChangeRace}/>
              </div>
              )
          });
    }
}
export default RaceSelector
