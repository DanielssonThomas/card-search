import "./style.css";
import image from "./../../assets/Star.webp";
const Button = (props) => {
  const handleClick = () => {
    console.log("click");
  };

  function addStars(src, amount) {
    const stars = [];
    for (let i = 0; i < amount; i++) {
      stars.push(<img key={i} src={src} />);
    }
    return stars;
  }
  

  return (
    <div className="star-btn" onClick={handleClick}>
      {addStars(props.src, props.value)}
    </div>
  );
};

export default Button;
