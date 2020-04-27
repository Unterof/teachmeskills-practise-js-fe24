import React from 'react';

function Button({ title, onClick, color}) {
  const colors= {
      red: "danger",
      yellow: "warning",
      green: "success"
  };

    return(
    <button className={`btn btn-${colors[color]}`} onClick={onClick}>{title}</button>
  );
}

export default Button;

