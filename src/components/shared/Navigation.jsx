import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/AuthSclice";
import { logout } from "../HTTPS/Https";
import pf from "../../img/b.jpg";
const Navigation = () => {
  const { isAuth, user } = useSelector((state) => state.AuthSclice);
  const dispatch = useDispatch();
  const Logout = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="container navbar">
      <Link className="currentstyle" to="/">
        ✋<span style={{ marginLeft: "10px" }}>V-CHAT</span>
      </Link>
      {isAuth && (
        <div className="rightnav">
          <h3>{user.name}</h3>
          <Link to="/">
            <img
              src={user.avatar ? user.avatar : pf}
              alt=""
              className="imgpp"
            />
          </Link>
          {isAuth && (
            <button onClick={Logout}>
              <AiOutlineLogin />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
