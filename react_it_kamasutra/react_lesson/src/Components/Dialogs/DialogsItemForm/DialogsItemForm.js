import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required,maxLength } from '../../../utils/formHelpersFunctions';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength50 = maxLength(50)

const DialogMessageItem = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={Textarea} 
        validate={[required,maxLength50]}
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

