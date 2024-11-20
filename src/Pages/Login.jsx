/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Components/SocialLogin/GoogleLogin";

const Login = () => {
  const {Login} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    Login(data.email, data.password)
    .then(()=>{
      navigate("/")
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">
              Want`s to buy the latest gadget in the market? Login to your now
              and get the latest updates on the trending gadgets.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">
                    {errors.password.type === "required"
                      ? "Password is required"
                      : errors.password.type === "minLength"
                      ? "Password must be at least 6 characters"
                      : "Invalid password"}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <GoogleLogin></GoogleLogin>
              <p className="mb-4 text-center text-sm ">
                New here? Create an Account {}
                <Link to="/register" className="text-blue-500 font-bold">
                Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;