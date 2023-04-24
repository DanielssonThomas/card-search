import TierButton from "../tierButton";
import TypeButton from "../typeButton";
import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";

const SearchBar = (props) => {
  const addTierButtons = () => {
    const tierButtons = [];
    for (let i = 1; i <= 6; i++) {
      if (i == props.tier) {
        tierButtons.push(
          <div className="tier-search button-active">
            <TierButton
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
    ];

    types.forEach((type) => {
      if (type == props.type) {
        typeButtons.push(
          <TypeButton
            setType={props.setType}
            value={type}
            src={image}
            style="type-button button-active"
          />
        );
      } else {
        typeButtons.push(
          <TypeButton
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
  return (
    <div className="search-bar-container">
      <div className="tier-search">
        <TierButton setTier={props.setTier} type="tier" value="" text="Reset" />
      </div>
      <section className="search-container">{addTierButtons()}</section>
      <TypeButton
        setType={props.setType}
        type="type"
        value=""
        text="Reset"
        style="type-button"
      />
      <section className="search-container type-search">
        {addTypeButtons()}
      </section>
    </div>
  );
};

export default SearchBar;
