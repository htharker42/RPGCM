import React from "react"
import PropTypes from "prop-types"
//import { Dndhandlesubraces } from "./Dndhandlesubraces"
//TODO refactor subrace to stateless class, finish commenting functions, refactor to stateless


export class Dndclassselector extends React.Component {

  constructor(props){
      super(props)
      //this.state = {}
      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e){
      console.log(e.target.id)
      this.props.onChange(e.target.id);
    }

    render() {
      var dndClasses = this.props.classes.map((dndclass)=>{
        return(
          <input type = "button" id={dndclass.id} value={dndclass.name} onClick={this._handleChange} />
        )

      })

      return(
        <div>
            {dndClasses}
        </div>
    )
  }
}
