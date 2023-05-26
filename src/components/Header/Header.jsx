import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../providers/ContextProvider";

const Header = () => {
  let { user, logOutUser } = useContext(UserContext);


  let handleLogOut = () => {
    logOutUser()
    .then(()=>{})
    .catch(error=>console.log(error))
  }



  return (
    <div className="flex justify-between items-center p-4 w-11/12 mx-auto text-sm md:text-lg">
      <div>
        {/* <p className="name">ThaiSpice</p> */}
        <Link className="name" to="/">ThaiSpice</Link>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
        {user ? (
          <div className="flex gap-1 md:gap-2 items-center">
            <NavLink
              onClick={handleLogOut}
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Log Out
            </NavLink>
            <img
              className="w-10 rounded-full cursor-pointer"
              title={user.displayName}
              src={user.photoURL}
              alt="user"
            />
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
