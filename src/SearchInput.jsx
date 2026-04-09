import { Search } from 'lucide-react';
import InputFilter from './Buttons/InputFilter';

function SearchInput() {
  return (
    <div className="search-input">
      <Search size={16} />
      <input type="text" placeholder="Search meeting room…" />
      <InputFilter />
    </div>
  );
}

export default SearchInput;
