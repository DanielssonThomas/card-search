import Button from "../components/Button/index";
import Card from "../components/Card";
import { useState, useEffect } from "react";


const Home = () => {
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const url =
    "https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&tier=3&access_token=";
  
    useEffect(() => {
      const clientSecret = process.env.REACT_APP_SECRET;
      const clientId = process.env.REACT_APP_ID;
  
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      };
  
  
      const fetchData = async () =>{
        let response = await fetch(
          "https://us.battle.net/oauth/token",
          requestOptions
        );
        let data = await response.json();
        let accessToken = data.access_token;
        setAccessToken(accessToken);
        response = await fetch(`${url}${accessToken}`);
        data = await response.json();
        setData(data);
      }
      fetchData();
    }, []);

    let cardsComponent = [];
    if(data != null)
    {
      cardsComponent = data.cards.map((card) => (
        <Card
          key={card.id}
          src = {card.image}
          name = {card.name}
        />
      ));
    }

  return (
    <div>
      <h2>Home</h2>
      {cardsComponent}
      {/* <Button text="Search" tier="" minion-type="" golden="" keyword="" /> */}
    </div>
  );
};

export default Home;
