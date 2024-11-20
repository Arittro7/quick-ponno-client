/* eslint-disable react/prop-types */
import { RiFilter2Line } from "react-icons/ri";
import { RxReset } from "react-icons/rx";

const FilterBar = ({setCategory, setBrand, handleReset, uniqueBrand, uniqueCategory}) => {
  return (
    <div className="bg-gray-200 h-screen p-4">
      <div className="flex gap-1 items-center text-2xl font-semibold">
        <RiFilter2Line />
        <h1>Filter</h1>
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center">
        <div className="w-full">
          <select
          onChange={(e) =>setBrand(e.target.value)}
          className="p-[11px] w-full border border-black rounded-md">
            
            <option value="">Brands</option>
            {
              uniqueBrand.map((brand, index) =>(
                <option key={index} value={brand}>{brand}</option>
              ))
            }
          </select>
        </div>
        <div className="w-full">
          <select
          onChange={(e) =>setCategory(e.target.value)}
          className="p-[11px] w-full border border-black rounded-md">
            
            <option value="">Categories</option>
            {
              uniqueCategory.map((category, index) =>(
                <option key={index} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
      </div>
      <button
      onClick={handleReset}
      className="mt-4 btn btn-outline w-full uppercase">
        <p>Reset</p>
        <RxReset></RxReset>
      </button>
    </div>
  );
};

export default FilterBar;
