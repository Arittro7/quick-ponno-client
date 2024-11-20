import useAuth from "../../Hooks/useAuth";

const Overview = () => {
  const {user} = useAuth()
  return (
    <div>
      <h1 className="font-semibold">{user.email}</h1>
    </div>
  );
};

export default Overview;