import IconSearch from "../../ui/IconSearch";
import Filter from "../filters/Filter";
// import InputFilter from './Buttons/InputFilter';



function SearchInput() {
  return (
    <div className="search-input">
      <IconSearch />
      <input type="text" placeholder="Search meeting room…" />
      <Filter />
    </div>
  );
}

export default SearchInput;
