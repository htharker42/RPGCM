import React from 'react'


export class Inventory extends React.Component {
  constructor(props){
    super(props)

    }

    _packer(outputKey, outputValue, outputString){
      outputString += `${outputKey}: ${outputValue}`
    }

    _parser(inputString){
      return(JSON.stringify(inputString))
    }

  render(){
    return(
      <div>
        <h1>{this._parser(this.props.inventory)}</h1>
      </div>

    )
  }
}
