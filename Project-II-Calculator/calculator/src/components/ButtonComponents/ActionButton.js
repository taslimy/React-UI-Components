import React from "react";
import "./Button.css";

function ActionButton(props) {
  return <section className={`action-button`}>{props.text}</section>;
}

export default ActionButton;
