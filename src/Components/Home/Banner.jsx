import bnrImg from '../../assets/banner.jpg'

const Banner = () => {

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bnrImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w">
            <h1 className="text-4xl font-bold mb-4 uppercase">
              QUICK<span className="text-green-600">Ponno</span>
            </h1>
            <p className="mb-5">
              Your One-Stop Shop for All Things You Love. <br /> Shop Smart, Shop
              Local, Shop PonnoLagbe! <br /> ✨ Enjoy Exclusive Deals, Fast Delivery,
              and Hassle-Free Shopping ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
