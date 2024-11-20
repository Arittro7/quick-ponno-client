/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-1">
      <input type="search" name="search" placeholder="Search..." 
      className="max-w-md p-[11px] border border-black rounded-l-md"/>
      <button className="btn rounded-l-none bg-gray-300 rounded-r-md btn-outline">
        <IoIosSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
