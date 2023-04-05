import { Link } from 'react-router-dom';

const url = `https://oauth.battle.net/authorize`;

const Button = (props) =>{
    return <Link className = "button" to={url}>{props.text}</Link>
};

export default Button;