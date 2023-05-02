import TierButton from "../tierButton";
import TypeButton from "../typeButton";
import KeyButton from "../keyButton";
import "./style.css";
import styled from "styled-components";
import image from "./../../assets/Star.webp";
import { useState } from "react";
import Button from "../tierButton";

const DropDownMenu = styled.div`
  flex-direction: column;
  gap: 20px;
  display: ${(props) => (props.hide ? "none" : "flex")};
`;

const OpenDropDownMenuButton = styled.button`
  background-color: purple;
  border: 2px solid black;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = (props) => {
  const [dropDownMenuVisible, setDropDownMenuVisible] = useState(false);
  const toggleDropDownMenu = () => {
    setDropDownMenuVisible(!dropDownMenuVisible);
  };
  const addTierButtons = () => {
    const tierButtons = [];
    for (let i = 1; i <= 6; i++) {
      if (i == props.tier) {
        tierButtons.push(
          <TierButton
            key={i}
            setTier={props.setTier}
            type="tier"
            value={i}
            src={image}
            style="button button-active"
          />
        );
      } else {
        tierButtons.push(
          <TierButton
            key={i}
            setTier={props.setTier}
            type="tier"
            value={i}
            src={image}
            style="button"
          />
        );
      }
    }
    return tierButtons;
  };

  const addTypeButtons = () => {
    const typeButtons = [];
    const types = [
      "murloc",
      "mech",
      "dragon",
      "beast",
      "quilboar",
      "demon",
      "elemental",
      "pirate",
      "naga",
      "undead",
    ];

    types.forEach((type) => {
      if (type == props.type) {
        typeButtons.push(
          <TypeButton
            key={type}
            setType={props.setType}
            value={type}
            src={image}
            style="button button-active"
          />
        );
      } else {
        typeButtons.push(
          <TypeButton
            key={type}
            setType={props.setType}
            value={type}
            src={image}
            style="button"
          />
        );
      }
    });
    return typeButtons;
  };

  const addKeywordButtons = () => {
    const keyButtons = [];
    const keyWords = [
      "avenge",
      "battlecry",
      "blood-gem",
      "deathrattle",
      "discover",
      "divine-shield",
      "frenzy",
      "immune",
    ];

    keyWords.forEach((word) => {
      if (word == props.keyword) {
        keyButtons.push(
          <KeyButton
            key={word}
            setKeyword={props.setKeyword}
            value={word}
            src={image}
            style="button button-active"
          />
        );
      } else {
        keyButtons.push(
          <KeyButton
            key={word}
            setKeyword={props.setKeyword}
            value={word}
            src={image}
            style="button"
          />
        );
      }
    });
    return keyButtons;
  };

  return (
    <div className="search-bar-container">
      <OpenDropDownMenuButton onClick={toggleDropDownMenu}>
        Filter Cards
      </OpenDropDownMenuButton>
      <DropDownMenu
        className="search-bar-container"
        hide={!dropDownMenuVisible}
      >
        <TierButton
          key="tierReset"
          setTier={props.setTier}
          type="tier"
          value=""
          text="Reset"
          style="button"
        />
        <section className="search-container">{addTierButtons()}</section>
        <TypeButton
          key="typeReset"
          setType={props.setType}
          type="type"
          value=""
          text="Reset"
          style="button"
        />
        <section className="search-container type-search">
          {addTypeButtons()}
        </section>

        <KeyButton
          key="keywordReset"
          setKeyword={props.setKeyword}
          type="type"
          value=""
          text="Reset"
          style="button"
        />
        <section className="search-container">{addKeywordButtons()}</section>
      </DropDownMenu>
    </div>
  );
};

export default SearchBar;
