import React from "react"
import PropTypes from "prop-types"

export class Dndforminput extends React.Component {
  componentDidMount() {
          console.log('Dndforminput mounted');
      }

    constructor(props){
      super(props)
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      var formItem= e.target.value
      this.props.onChange(formItem)
    }

    formItem(){
      return(
        <div>
          <input type = "text" name = {this.props.name} value = {this.props.value} onClick= {this.handleChange} />
        </div>
      );
    }

    render() {
      let classname = `${this.props.name}formItem`;
      return(
        <div className= {classname}>
          {this.formItem}
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
