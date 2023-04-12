import { useState, useEffect } from "react";

const url =
  "https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&tier=3&access_token=";

const Button = (props) => {
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const clientId = process.env.REACT_APP_ID;
    const clientSecret = process.env.REACT_APP_SECRET;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    const fetchAccessToken = async () => {
      const response = await fetch(
        "https://us.battle.net/oauth/token",
        requestOptions
      );
      const data = await response.json();
      const accessToken = data.access_token;
      setAccessToken(accessToken);
    
    };

    fetchAccessToken();
  }, []);

  const handleClick = async () => {
        const response = await fetch(`${url}${accessToken}`);
        const data = await response.json();
        setData(data);
        console.log(data);
  };


  return (
    <button className="button" onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
