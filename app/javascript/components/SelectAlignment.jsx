import React from "react";

export class SelectAlignment extends React.Component{
//we could do a embedded loop - but it would actually be more work so hard coding it is!
  render(){
    return(
      <div>
        <input className="btn btn-primary" type="button" value ="Lawful Good" onClick={this.props.onClick} />
        <input type="button" value ="Neutral Good" onClick={this.props.onClick} />
        <input type="button" value ="Chaotic Good" onClick={this.props.onClick} />
        <br/>
          <input type="button" value ="Lawful Neutral" onClick={this.props.onClick} />
          <input type="button" value ="True Neutral" onClick={this.props.onClick} />
          <input type="button" value ="Chatoic Neutral" onClick={this.props.onClick} />
        <br />
          <input type="button" value ="Lawful Evil" onClick={this.props.onClick} />
          <input type="button" value ="Neutral Evil" onClick={this.props.onClick} />
          <input type="button" value ="Chaotic Evil" onClick={this.props.onClick} />
    </div>
    )

  }
}
