import TierButton from "../tierButton";
import TypeButton from "../typeButton";
import "./style.css";
import image from "./../../assets/Star.webp";
import { useState } from "react";
const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      <section className="search-container">
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="1" src={image} />
        </div>
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="2" src={image} />
        </div>
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="3" src={image} />
        </div>
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="4" src={image} />
        </div>
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="5" src={image} />
        </div>
        <div class = "tier-search">
          <TierButton setTier={props.setTier} type="tier" value="6" src={image} />
        </div>
      </section>
      <section className="search-container type-search">
        <TypeButton setType={props.setType} type="type" value="murloc" src={image} />
        <TypeButton setType={props.setType} type="type" value="mech" src={image} />
        <TypeButton setType={props.setType} type="type" value="dragon" src={image} />
        <TypeButton setType={props.setType} type="type" value="beast" src={image} />
        <TypeButton setType={props.setType} type="type" value="quilboar" src={image} />
        <TypeButton setType={props.setType} type="type" value="demon" src={image} />
        <TypeButton setType={props.setType} type="type" value="elemental" src={image} />
        <TypeButton setType={props.setType} type="type" value="pirate" src={image} />
      </section>
    </div>
  );
};

export default SearchBar;
