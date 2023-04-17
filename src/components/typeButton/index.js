
import image from "./../../assets/Star.webp";
import { useState } from "react";



function addStars(src, amount) {
  const stars = [];
  for (let i = 0; i < amount; i++) {
    stars.push(<img key={i} src={src} />);
  }
  return stars;
}



const Button = (props) => {
  const handleClick = () => {
    props.setType(props.value);
    console.log(props.value);
  };

  

  return (
    <div className="star-btn" onClick={handleClick}>
      {props.value}
      {/* {addStars(props.src, props.value)} */}
    </div>
  );
};

export default Button;
