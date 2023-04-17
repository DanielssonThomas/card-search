import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import "./style.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [tier, setTier] = useState("");
  const [type, setType] = useState("");

  // const url = `https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&pageSize=1000&type=minion&sort=tier:asc&tier=${tier}&minionType=${type}&access_token=`;
  const url = `https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&pageSize=1000&type=minion&sort=tier:asc&tier=${tier}&minionType=${type}&access_token=`;






  useEffect(() => {
    const clientSecret = process.env.REACT_APP_SECRET;
    const clientId = process.env.REACT_APP_ID;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    const fetchData = async () => {
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
    };
    fetchData();
  }, [tier, type]);

  let cardsComponent = [];
  if (data != null) {
    cardsComponent = data.cards.map((card) => (
      <Card key={card.id} src={card.battlegrounds.image} name={card.name} />
    ));
  }

  return (
    <div>
      <SearchBar setType={setType} setTier={setTier}/>
      <section className="home"></section>
      <div className="cards-container">{cardsComponent}</div>
    </div>
  );
};

export default Home;
