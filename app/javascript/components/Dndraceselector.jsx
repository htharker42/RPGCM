import React from "react"
import PropTypes from "prop-types"

export class Dndraceselector extends React.Component {
  componentDidMount() {
          console.log('Component mounted');
      }

    constructor(props){
      super(props)

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      var dndrace = e.target.value
      this.props.onChange(dndrace)
    }

    render() {
      var raceForm = this.props.races.map((dndrace)=>{
        return(
            <input key={dndrace.id} type = "button" value = {dndrace.name} onClick= {this.handleChange} />
        )});

      return(
        <div className= "dndRacebutton">
          {raceForm}
        </div>
    )
  }
}
/*
Dndraceselector.propTypes = {
  race: PropTypes.array
};
*/
//export default Dndraceselector
