import { useEffect } from "react";
import { useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import axios from "axios";
import WishlistCard from "../../../Components/Wishlist/WishlistCard";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const userData = useUserData();
  const [latestData, setLatestData] = useState();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      await axios
        .get(`https://quick-ponno-server.vercel.app/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setWishlist(res.data));
    };
    if (userData._id && token) {
      fetchWishlist();
    }
  }, [token, userData._id, latestData]);

  return (
    <div>
      <h1 className="text-2xl font-bold flex items-center justify-center">
        My Wishlist
      </h1>
      <div className="space-y-3">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <WishlistCard
              key={product._id}
              product={product}
              setLatestData={setLatestData}
              latestData={latestData}
            ></WishlistCard>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h1>Add your favorite products to your wishlist</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
