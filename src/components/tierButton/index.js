import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";

// function addStars(src, amount) {
//   const stars = [];
//   for (let i = 0; i < amount; i++) {
//     stars.push(<img key={i} src={src} />);
//   }
//   return stars;
// }

const Button = (props) => {
  const handleClick = () => {
    props.setTier(props.value);
    console.log(props.value);
  };

  return (
    <div className="star-btn" onClick={handleClick}>
      <div className="star-container">
        {props.text}
        {props.value}
      </div>
    </div>
  );
};

export default Button;
