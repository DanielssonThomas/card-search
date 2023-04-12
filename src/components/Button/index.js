import "./style.css";
const Button = (props) => {
  const handleClick = () => {
    console.log("click");
  };

  const displayTiers = () => {
    for (let i = 0; i < 5; i++) {
      <div className="star-btn" onClick={handleClick}>
        <p>{props.value}</p>
        <img src={props.src} />
      </div>;
    }
  };

  return (
    // <div className="star-btn" onClick={handleClick}>
    //   <p>{props.value}</p>
    //   <img src={props.src} />
    // </div>
    <div>{displayTiers()}</div>
  );
};

export default Button;
