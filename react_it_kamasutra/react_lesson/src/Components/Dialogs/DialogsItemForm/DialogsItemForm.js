import React from 'react'
import { Field, reduxForm } from 'redux-form';



const DialogMessageItem = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
        <Field component="TextArea" 
            name = "messageItem"      
            
            placeholder="Type your message"
          />
        </div>
        <div>
          <button >Send</button>
        </div>
      </form>
    )
  };
  
  export default reduxForm({form:'dialogMessageItem'})(DialogMessageItem)

