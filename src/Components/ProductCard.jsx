import axios from "axios";
import useUserData from "../Hooks/useUserData";

/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
  const userData = useUserData()
  const userEmail = userData.email
  // console.log(userEmail);

  const handleWishlist = async () =>{
    await axios.post("http://localhost:5000/wishlist/add", {userEmail,productId: product._id}).then(res => console.log(res.data))
  }

  return (
    <div>
      <div className="border-2  p-2 border-gray-500 shadow-md">
        <figure>
          <img className="h-[300px] w-full object-cover p-4"
            src={product?.image}
            alt="Product Image"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-xl font-semibold">{product?.title}</h1>
          <div className="flex justify-between font-semibold">
          <h1>{product?.brand}</h1>
          <h1>{product?.category}</h1>
          </div>
          <div className="flex justify-between font-semibold">
          <h1> Price: ${product?.price}</h1>
          <h1> Stock: {product?.stock}</h1>
          </div>
          <h1>{product?.description.length <40
          ? `${product?.description}` :
          `${product?.description.substring(0, 40)}...`
          // or `${product.description.slice(0, 50)}...`
          }</h1>
        </div>
        <div className="btn btn-outline flex justify-center">
          <button 
          onClick={handleWishlist}
          className="uppercase font-semibold">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
