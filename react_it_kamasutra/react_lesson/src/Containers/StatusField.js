import React from "react";

class StatusField extends React.Component  {
 state = {
     editMode : false
 }

  activationMode = () => {

 this.setState({
      editMode: true
 })
  }

    deactivationMode = () => {
     this.setState({
         editMode: false
     })
    }
    render () {
       return (
           <div>
          <div>
              {!this.state.editMode && <div>
                  <span onDoubleClick={this.activationMode}
                  >{this.props.status}</span>
              </div>}
              {this.state.editMode && <div>
                  <input autoFocus={true} onBlur={this.deactivationMode}  value={this.props.status}/>
              </div>
              }
          </div>
          </div> 
       )
    }
}

export default StatusField