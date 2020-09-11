import React from 'react';



function Button ({title,color,onClick}) {

    const colors = {
        yellow: 'warning',
        red : 'danger',
        green: 'success'
    }

    return (
        
            <button type='button' className= {`btn btn-${colors[color]}`} onClick={onClick} >{title}</button>
        
    )

    
}

export default Button