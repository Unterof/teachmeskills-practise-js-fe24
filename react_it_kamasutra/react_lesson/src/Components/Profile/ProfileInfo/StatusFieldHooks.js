import React, {useEffect, useState} from "react";

const StatusFieldHooks = React.memo(props =>  {

 // state = {
 //     editMode : false,
 //     status:this.props.status
 // }


 let [editMode, setEditMode] = useState (false);
 let [status  , setStatus] = useState (props.status);

 useEffect(() => {
        setStatus(props.status)
    }, [props.status])

 const  activationMode = () =>  {
     setEditMode (true)
 }

 let deactivationMode =  () => {
     setEditMode(false)
      props.updateUserStatus(status)


  }

  const  onStatusChange =  (e) => {
       setStatus(e.currentTarget.value)
   }
    return (

           <div>
          <div>
              {!editMode && <div>
                  <span onDoubleClick={activationMode}><b>Status : </b>{props.status || '--------' } </span>
              </div>}
              {editMode && <div>
                  <input value={status}  onChange={onStatusChange} autoFocus={true} onBlur={deactivationMode}  />
                  <button onClick={deactivationMode} value={status}>send</button>
              </div>
              }
          </div>
          </div> 
       )
    }
)

export default StatusFieldHooks