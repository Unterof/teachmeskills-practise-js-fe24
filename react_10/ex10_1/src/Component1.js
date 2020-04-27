import React from 'react'

function  Component1(props) {
    return (
        <div>
        <div>Header</div>
        <div>
        {props.children}
         
        </div>
        </div>
        )

}


export default Component1