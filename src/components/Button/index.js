import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const url = `https://oauth.battle.net/authorize`;

const Button = (props) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const clientId = "{}";
    const clientSecret = "{}";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    fetch("https://oauth.battle.net/token", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Link className="button" to={url}>
      {props.text}
    </Link>
  );
};

export default Button;
