import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setTier(props.value);
    console.log(props.value);
  };

  return (
    <div className="star-btn" onClick={handleClick}>
      <div class="">
        {props.text}
        {addStars(props.src, props.value)}
      </div>
    </div>
  );
};

export default Button;
