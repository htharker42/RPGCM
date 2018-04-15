import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export class RaceSelector extends React.Component {

    constructor(props){
      super(props)
    this.handleChangeRace = this.handleChangeRace.bind(this);
    }

    handleChangeRace(e){
      var raceObj = {race: e.target.value}
      //this.setState({character: raceObj})
    }

    render() {
      var races = this.props.races.id.map((dndraces)=>{
        return(
              <div class="raceButton">
              <input type="button" value = {dndraces.name} onClick={this.handleChangeRace}/>
              </div>
              )
          });
    }
}
