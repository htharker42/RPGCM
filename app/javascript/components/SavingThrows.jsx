import React from "react"
import PropTypes from "prop-types"

export class SavingThrows extends React.Component {

  render(){

    let x = -1;
    let savingThrows = this.props.stats.map((stat)=>{
      let throwName = stat.toUpperCase() + "Save"
      x +=1
      return(
        <div>
          <h5>{throwName}: {this.props.saveArray[x]+ this.props.modArray[x]}</h5>
        </div>
      )
    })

    return(
      <div>
        {savingThrows}
      </div>
    )
  }
}
