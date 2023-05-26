import React, { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider";
import Loader from "../Loader/Loader";
import showError from "../Alerts/ErrorAlert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser, dataLoading, setDataLoading } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password.length >= 6) {
      createUser(email, password)
        .then(() => {
          updateUser(name, photo)
            .then(() => {
              navigate("/", { replace: true });
            })
            .catch((error) => {
              let errorMessage = error.message;
              showError(errorMessage);
              setDataLoading(false);
            });
        })
        .catch((error) => {
          let errorMessage = error.message;
          showError(errorMessage);
          setDataLoading(false);
        });
    } else {
      showError("password must be 6 character longer");
    }
    event.target.reset();
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-b from-cyan-200 to-blue-600">
        <div className="opacity-100 z-50">{dataLoading && <Loader />}</div>
        <div className="hero-content w-full md:w-3/5">
          <div className="card w-full shadow-2xl bg-white md:py-8 md:px-16">
            <h1 className="sign-title">Register to ThaiSpice</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name here"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL here"
                  className="input input-bordered focus:outline-none"
                />
              </div>
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
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
