import React from "react";
import PropTypes from "prop-types";

export class HandleBaseStats extends React.Component {
  componentDidMount(){
    console.log("handlerBaseStats Mounted")
  }

  constructor(props){
      super(props)
      this.state = {
          statValue: this.props.statValue,
          statPool: this.props.statPool
      }
      this.handleStatChange = this.handleStatChange.bind(this);
  }

  handleStatChange(e){
      let stat = this.props.statValue;
      let statPool = this.props.statPool;
      if(e.target.value == "◄"){
            if (stat > 0) {
              stat -= 1;
              statPool += 1;
              }
            }else{
              if (statPool > 0) {
                stat += 1;
                statPool -= 1;
              }
            }
        this.props.onClick(e.target.name, stat, statPool);
      }

    render(){
        return(
          <div className="attributeContainter">
            <h3>{this.props.stat.toUpperCase()}</h3>
            <h2>{this.props.statValue + this.props.statModifier}</h2>
            <h5>Attribute Mod</h5>
            <h4>{this.props.statModifier}</h4>
                <input type= "button" name = {this.props.stat} onClick = {this.handleStatChange} value = "◄" />
                <input type="button" name = {this.props.stat} onClick = {this.handleStatChange} value = "►" />
            </div>
        )
      }
}
