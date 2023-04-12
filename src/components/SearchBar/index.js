import SearchBtn from "../Button";
import "./style.css";
import image from "./../../assets/Star.webp";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <section className="tier-search-container">
        <SearchBtn type="tier" value="1" src={image} />
        <SearchBtn type="tier" value="2" src={image} />
        <SearchBtn type="tier" value="3" src={image} />
        <SearchBtn type="tier" value="4" src={image} />
        <SearchBtn type="tier" value="5" src={image} />
        <SearchBtn type="tier" value="6" src={image} />
      </section>
    </div>
  );
};

export default SearchBar;
