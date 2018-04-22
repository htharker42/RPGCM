import React from "react"
import PropTypes from "prop-types"

export class Dndforminput extends React.Component {

    constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      let keyID = e.target.name;
      let datum = e.target.value;
      this.props.onChange(keyID, datum);
    }

    render() {
      let classname = `${this.props.name}FormItem`;
      let label = `${this.props.name.toUpperCase()}: `;
      return(
        <div className = {classname}>
                <textarea
                  type = "text"
                  placeholder = {label}
                  name = {this.props.name}
                  value = {this.props.value}
                  onChange= {this.handleChange} />
      </div>
    )
  }
}
/*
Dndraceselector.propTypes = {
  race: PropTypes.array,
  name: Proptype.string,
  value: Proptype.string
};
*/
/*
<input
  type="text"
  name={this.props.name}
  value = {this.props.value}
  onChange={this._handleChange} />
*/
