import TierButton from "../tierButton";
import TypeButton from "../typeButton";
import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";

const SearchBar = (props) => {
  const addTierButtons = () => {
    const tierButtons = [];
    for (let i = 1; i <= 6; i++) {
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
      typeButtons.push(
        <TypeButton
          setType={props.setType}
          type="type"
          value={type}
          src={image}
        />
      );
    });

    return typeButtons;
  };
  return (
    <div className="search-bar-container">
      <section className="search-container">
        <div class="tier-search">
          <TierButton
            setTier={props.setTier}
            type="tier"
            value=""
            text="Reset"
          />
        </div>
        {addTierButtons()}
      </section>
      <section className="search-container type-search">
        <TypeButton setType={props.setType} type="type" value="" text="Reset" />
        {addTypeButtons()}
      </section>
    </div>
  );
};

export default SearchBar;
