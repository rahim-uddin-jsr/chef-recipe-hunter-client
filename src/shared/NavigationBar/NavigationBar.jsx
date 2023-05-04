import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const NavigationBar = () => {
  const { LogOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut().then(() => {
      toast.success("logout successFull");
    });
  };
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending justify-between"
                    : isActive
                    ? "active justify-between"
                    : "justify-between"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Foodie Crush
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown dropdown-end tooltip tooltip-left"
            data-tip={user.displayName}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
              <div className="w-10 rounded-full ">
                <LazyLoad>
                  <img src={user.photoURL} />
                </LazyLoad>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
