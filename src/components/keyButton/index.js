import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setKeyword(props.value);
    console.log(props.value);
  };

  return (
    <div className={props.style} onClick={handleClick}>
      <div>
        {props.text}
        {props.value}
      </div>
    </div>
  );
};

export default Button;
