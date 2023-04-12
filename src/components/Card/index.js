const Card = (props) => {
    return (
      <div>
        <img src={props.src} alt={props.name} />
      </div>
    );
  };
  
  export default Card;