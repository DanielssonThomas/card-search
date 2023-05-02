import "./style.css";
const Button = (props) => {
  const displayTiers = () => {
    return(
        <div>
            
        </div>
    );
    for (let i = 0; i < props.value; i++) {
      return <div className="star-btn">he</div>;
    }
  };

  return (
    <div>
      <section className="star-container">{displayTiers()}</section>
    </div>
  );
};

export default Button;
