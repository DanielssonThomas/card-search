import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./style.css";

const DataReportWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const DataReport = styled.h2`
  font-size: 2rem;
  color: #009ae4;
`;

const Home = () => {
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [tier, setTier] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");

  const url = `https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&pageSize=1000&type=minion&sort=tier:asc&tier=${tier}&minionType=${type}&keyword=${keyword}&access_token=`;

  useEffect(() => {
    setData(null);
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
    console.log(data);
  }, [tier, type, keyword]);

  let cardsComponent = [];

  let dataReportText = "";
  if (data == null) {
    dataReportText = "Searching...";
  } else {
    if (data.cards.length <= 0) {
      dataReportText = "no cards found";
    } else {
      dataReportText = `${data.cards.length} cards found`;
    }
  }

  if (data != null) {
    cardsComponent = data.cards.map((card) => (
      <Card key={card.id} src={card.battlegrounds.image} name={card.name} />
    ));
  }
  return (
    <div className="main-container">
      <DataReportWrapper>
        <DataReport>{dataReportText}</DataReport>
      </DataReportWrapper>
      <SearchBar
        tier={tier}
        type={type}
        keyword={keyword}
        setKeyword={setKeyword}
        setType={setType}
        setTier={setTier}
      />
      <div className="cards-container">{cardsComponent}</div>
    </div>
  );
  /////////////
  // if (data != null) {
  // cardsComponent = data.cards.map((card) => (
  //   <Card key={card.id} src={card.battlegrounds.image} name={card.name} />
  // ));
  //   if (data.cards.length <= 0) {
  //     return (
  //       <div>
  //         <DataReportWrapper>
  //           <DataReport>No cards found :(</DataReport>
  //         </DataReportWrapper>
  //         <SearchBar
  //           tier={tier}
  //           type={type}
  //           keyword={keyword}
  //           setKeyword={setKeyword}
  //           setType={setType}
  //           setTier={setTier}
  //         />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <DataReportWrapper>
  //           <DataReport>{data.cards.length} cards found</DataReport>
  //         </DataReportWrapper>
  //         <SearchBar
  //           tier={tier}
  //           type={type}
  //           keyword={keyword}
  //           setKeyword={setKeyword}
  //           setType={setType}
  //           setTier={setTier}
  //         />
  // <div className="cards-container">{cardsComponent}</div>
  //       </div>
  //     );
  //   }
  // } else {
  //   return (
  //     <div>
  //       <DataReportWrapper>
  //         <DataReport>Searching...</DataReport>
  //       </DataReportWrapper>
  //         <SearchBar
  //             tier={tier}
  //             type={type}
  //             keyword={keyword}
  //             setKeyword={setKeyword}
  //             setType={setType}
  //             setTier={setTier}
  //           />
  //     </div>
  //   );
  // }
};

export default Home;
