import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Registration = () => {
  const { createUserWithEmail, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const infoForUpdate = { displayName: name, photoURL: photoUrl };

    if (password.length <= 5) {
      setError("Password must be at least 6 character");
      return;
    }
    setError("");
    createUserWithEmail(email, password)
      .then((result) => {
        updateUser(infoForUpdate)
          .then(() => {
            toast.success("updated");
          })
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("user created successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                required
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
                required
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
                required
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
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            {error && <span className="text-red-300">{error}</span>}
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
