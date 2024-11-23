/* eslint-disable react/prop-types */

import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../../Hooks/useUserData";

const WishlistCard = ({product, setLatestData, latestData}) => {
  const { title, price, image, stock, brand } = product;
  const userData = useUserData();
  const userEmail = userData.email;

  const handleRemoveWishlist = async () => {
    await axios
      .patch("http://localhost:5000/wishlist/remove", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product removed from Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatestData(!latestData)
        }
      });
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        <img 
        className="w-32 border-2 rounded-xl p-2"
        src={image} alt="" />
      </div>
      <h1 className="text-lg font-bold w-60">{title}</h1>
      <h1 className="w-60"> <span className="font-semibold">Brand</span> <br />{brand}</h1>
      <h1 className="w-60"> <span className="font-semibold">Price</span> <br />${price}</h1>
      <h1 className="w-60"> <span className="font-semibold">Items Left</span> <br />{stock}</h1>
      <button
      onClick={handleRemoveWishlist} className="btn bg-red-500 text-white">Remove</button>
      <button className="btn bg-emerald-300">Buy Now</button>
    </div>
  );
};

export default WishlistCard;