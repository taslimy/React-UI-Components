import React from "react";
import "./Button.css";

function ActionButton(props)  {
  return (
  // <button className={props.buttonStyle}>{props.text}</button>
    <div className="action-button">{props.name}</div>
  );
}

export default ActionButton;
