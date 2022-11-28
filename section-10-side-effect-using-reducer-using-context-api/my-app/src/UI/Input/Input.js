import React from "react";
import './Input.css'

const Input = (props) => {
  return (
    <div className="input-control">
      <label>{props.label}</label>
      <input type={props.type} name={props.name} onChange={props.onChange}></input>
    </div>
  );
};

export default Input;
