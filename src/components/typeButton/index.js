import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setType(props.value);
    console.log(props.value);
  };

  return (
    <div className={props.style} onClick={handleClick}>
      {props.text}
      {props.value}
    </div>
  );
};

export default Button;
