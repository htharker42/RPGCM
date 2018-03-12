import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export class RaceSelector extends React.Component {
    constructor(props){
      super(props)
      this.state = {
                    race: "",
                    character: this.props.character,
                    image: "app/assets/images/default.jpg"
                  }
    }
    render() {
      return(
    <div>
        <h3> test </h3>
        <form>
          <input type = "text" name = "Character name" />
          <br />
          <input type = "submit" value = "Create Character" />
        </form>
    </div>
  );
    }
}
