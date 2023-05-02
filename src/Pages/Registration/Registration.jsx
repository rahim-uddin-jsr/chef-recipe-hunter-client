import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Registration = () => {
  const { createUserWithEmail } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    createUserWithEmail(email, password)
      .then((result) => {
        toast.success("user created successfully");
        console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photoUrl"
                type="url"
                placeholder="Photo Url"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            {/* <label className="label mt-6">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
            <div className="mt-6">
              <span>
                Already have have account?
                <Link to="/login"> Please login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
