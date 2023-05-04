import React from "react";
import { toast } from "react-hot-toast";

const Subscribe = () => {
  return (
    <div className="hero min-h-screen bg-base-500">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Subscribe now!</h1>
          <p className="py-6">
            Get the tastiest recipes, the latest news, new product
            notifications, and exclusive promotions conveniently in your inbox!
          </p>
        </div>
        <form
          onSubmit={() => {
            toast.success("Subscribed Successfully!!");
          }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
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
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-info">
                Subscribe!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
