import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { GoogleLogin } = useAuth();
  const naviate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().then(() => {
      naviate("/");
    });
  };
  return (
    <div>
      <div className="divider divider-neutral">Or</div>
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
        <FcGoogle size={20}/> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
