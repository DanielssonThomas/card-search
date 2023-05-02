import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setTier(props.value);
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
