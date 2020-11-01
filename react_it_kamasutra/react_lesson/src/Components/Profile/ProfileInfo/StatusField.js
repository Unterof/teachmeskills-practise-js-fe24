import React from "react";

class StatusField extends React.Component  {
 state = {
     editMode : false,
     status:this.props.status
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
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }


    render () {

       return (

           <div>
          <div>
              {!this.state.editMode &&
              <div>
                  <span onDoubleClick={this.activationMode}>{this.props.status || '--------' }</span>
              </div>}
              {this.state.editMode && <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivationMode}  value={this.state.status}/>
              </div>
              }
          </div>
          </div> 
       )
    }
}

export default StatusField