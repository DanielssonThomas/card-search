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
          <div className="tier-search button-active">
            <TierButton
              key={i}
              setTier={props.setTier}
              type="tier"
              value={i}
              src={image}
            />
          </div>
        );
      } else {
        tierButtons.push(
          <div className="tier-search">
            <TierButton
              key={i}
              setTier={props.setTier}
              type="tier"
              value={i}
              src={image}
            />
          </div>
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
            style="type-button button-active"
          />
        );
      } else {
        typeButtons.push(
          <TypeButton
            key={type}
            setType={props.setType}
            value={type}
            src={image}
            style="type-button"
          />
        );
      }
    });
    return typeButtons;
  };

  const addKeywordButtons = () => {
    const keyButtons = [];
    const keyWords = ["battlecry", "deathrattle", "reborn"];

    keyWords.forEach((word) => {
      keyButtons.push(
        <KeyButton
          key={word}
          setType={props.setKeyword}
          value={word}
          src={image}
        />
      );
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
        <div className="tier-search">
          <TierButton
            key="tierBtn"
            setTier={props.setTier}
            type="tier"
            value=""
            text="Reset"
          />
        </div>
        <section className="search-container">{addTierButtons()}</section>
        <TypeButton
          key="teag"
          setType={props.setType}
          type="type"
          value=""
          text="Reset"
          style="type-button"
        />
        <section className="search-container type-search">
          {addTypeButtons()}
        </section>

        <TypeButton
          key="teag"
          setType={props.setType}
          type="type"
          value=""
          text="Reset"
          style="type-button"
        />
        <section className="search-container">{addKeywordButtons()}</section>
      </DropDownMenu>
      <section className="search-container"></section>
    </div>
  );
};

export default SearchBar;
