import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Review = () => {
  return (
    <AwesomeSlider className="h-[250px] w-[300px]">
      <div className="text-white">
        <h1>Amazing experience! The products were well-packaged and delivered on time. Highly recommended!</h1>
        <p className="text-center">Rakib Arnob</p>
      </div>
      <div className="text-white">
        <h1>User-friendly website with a great variety of products. Shopping here was super easy!</h1>
        <p className="text-center">Ashria Jahan</p>
      </div>
      <div className="text-white">
        <h1>QuickPonno offers competitive prices and fast delivery. I will definitely shop again!</h1>
        <p className="text-center">Pranto Islam</p>
      </div>
    </AwesomeSlider>
  );
};

export default Review;
