import { useEffect, useState } from "react";
import FilterBar from "../Components/Product/FilterBar";
import SearchBar from "../Components/Product/SearchBar";
import SortByPrice from "../Components/Product/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/ProductCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/all-product?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        );
        setProducts(response.data.products);
        setUniqueBrand(response.data.brands);
        setUniqueCategory(response.data.categories);
        setTotalPages(Math.ceil(response.data.totalProducts / 9));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [brand, category, search, sort, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setBrand("");
    setSearch("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">Products</h1>
      {/* 1st row */}
      <div className="flex justify-between mb-6">
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <SortByPrice setSort={setSort}></SortByPrice>
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <FilterBar
            setCategory={setCategory}
            setBrand={setBrand}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
            handleReset={handleReset}
          ></FilterBar>
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading></Loading>
          ) : products.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-2xl font-bold">No Product Found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              onClick={() => handlePageChange(page - 1)}
              className="btn btn-outline rounded-full"
              disabled={page === 1}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="btn btn-outline rounded-full"
              disabled={page === totalPages}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;