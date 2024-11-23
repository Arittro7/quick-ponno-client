import useAuth from "../../Hooks/useAuth";

const Overview = () => {
  const {user} = useAuth()
  return (
    <div>
      <h1 className="font-semibold">{user.email}</h1>

      <h1>After deploying, the private routes (sidebar button) specially Wishlist and home are sometimes not working with single click. It require continuous multiple click to work</h1>

      <p>Please do Consider🙏🏼</p>
    </div>
  );
};

export default Overview;