import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmailPassword, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPassword(email, password)
      .then((result) => {
        toast.success("login successful");
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google login Success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        toast.success("Github login Success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="pb-2 card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-6">
              <span>
                Don't have any account?
                <Link to="/register"> Please Register</Link>
              </span>
            </div>
          </form>
          <div className="divider mx-8">OR</div>
          <div className="flex flex-col w-full px-8 lg:flex-row">
            <div className="grid flex-grow ">
              <div className="btn-group mb-5 gap-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn  btn-primary w-1/2"
                >
                  Google SignIn
                </button>
                <button
                  onClick={handleGithubSignIn}
                  className="btn btn-primary w-1/2"
                >
                  Github SignIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
