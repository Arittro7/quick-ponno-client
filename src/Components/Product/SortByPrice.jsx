const SortByPrice = ({setSort}) => {
  return (
    <select
    onChange={(e)=> setSort(e.target.value)}
    className="p-[11px] max-w-md w-36 border border-black rounded-md">
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
};

export default SortByPrice;
