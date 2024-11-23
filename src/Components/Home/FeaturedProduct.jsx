import ProductCard from "../ProductCard";

const FeaturedProduct = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default FeaturedProduct;