import React from "react"
import PropTypes from "prop-types"

export class CharacterSkills extends React.Component {

  _parser(){
    if (this.props.skills != null){
    let skillArray = this.props.skills.split("&");
    return(skillArray)
    }
    else{
      return(["Select Class"])
    }
  }

  render(){
    let skillArray = this._parser();
    let arrayToDisplay = skillArray.map((item)=>{
      return(
        <div>
          <h5>{item.toUpperCase()}</h5>
        </div>
      )
    })
    return(
      <div>
        {arrayToDisplay}
      </div>
    )
  }
}
