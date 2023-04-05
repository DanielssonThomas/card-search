import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const url =
//   "https://eu.api.blizzard.com/hearthstone/cards/679?locale=en_US&access_token=";
"https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&tier=3&access_token=";

const Button = (props) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const clientId = process.env.REACT_APP_ID;
    const clientSecret = process.env.REACT_APP_SECRET;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    fetch("https://us.battle.net/oauth/token", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        setAccessToken(accessToken);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <a
      className="button"
      href={`${url}${accessToken}`}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default Button;
