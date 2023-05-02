import "./style.css";
import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setKeyword(props.value);
    console.log(props.value);
  };

  return (
    <div className="keyButton" onClick={handleClick}>
      <div>
        {props.text}
        {props.value}
      </div>
    </div>
  );
};

export default Button;
