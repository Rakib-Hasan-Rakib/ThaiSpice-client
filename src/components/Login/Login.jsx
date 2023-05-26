import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/images/google-icon.png";
import githubIcon from "../../assets/images/github-icon.png";
import { UserContext } from "../../providers/ContextProvider";
import Loader from "../Loader/Loader";
import showError from "../Alerts/ErrorAlert";

const Login = () => {
  let {
    googleLoginUser,
    githubLoginUser,
    loginUser,
    dataLoading,
    setDataLoading,
  } = useContext(UserContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  // google log in function
  const handleGoogleLogin = () => {
    googleLoginUser()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        showError(errorMessage);
        setDataLoading(false)
      });
  };
  // github login function
  const handleGithubLogin = () => {
    githubLoginUser()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        showError(errorMessage);
        setDataLoading(false);
      });
  };
  // email password login function
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        showError(errorMessage);
        setDataLoading(false);
      });
    event.target.reset()
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-b from-cyan-200 to-blue-600">
        <div className="opacity-100 z-50">{dataLoading && <Loader />}</div>
        <div className="hero-content w-full md:w-3/5">
          <div className="card w-full shadow-2xl bg-white md:py-8 md:px-16">
            <h1 className="sign-title">Login to ThaiSpice</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email here"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password here"
                  required
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 py-2 rounded-md font-bold text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <p>or login with</p> <br />
              <div className="flex justify-center items-center gap-4">
                <img
                  onClick={handleGoogleLogin}
                  className="w-12 cursor-pointer"
                  src={googleIcon}
                  alt="Google icon for log in"
                />
                <img
                  onClick={handleGithubLogin}
                  className="w-12 cursor-pointer"
                  src={githubIcon}
                  alt="Github icon for log in"
                />
              </div>
            </div>
            <p className="text-center mt-6">
              Don't have account yet?{" "}
              <Link
                className="text-blue-600 hover:border-b hover:border-blue-600"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
