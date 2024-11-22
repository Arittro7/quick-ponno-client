/* eslint-disable react/prop-types */

const WishlistCard = ({product}) => {
  const { title, price, image, stock, brand } = product;
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
      <button className="btn bg-emerald-300">Buy Now</button>
    </div>
  );
};

export default WishlistCard;