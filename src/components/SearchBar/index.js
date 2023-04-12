import SearchBtn from "../components/Button/index";
import "./style.css";
const SearchBar = () => {
  const searchBtns = () => {
    for (let i = 0; i < 6; i++) {
      <SearchBtn type="tier" value={i} />;
    }
  };
  return (
    <div>
      <section>{searchBtns}</section>
    </div>
  );
};

export default SearchBar;
