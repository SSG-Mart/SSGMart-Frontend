import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./nav.scss";
import { PORT } from "../../util";

const Nav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [userID, setUserID] = useState(-1);
  const [trigger, setTrigger] = useState(true);
  const [seller, isSeller] = useState();

  useEffect(() => {
    axios
      .post("/api/auth/checkAuth")
      .then((res) => {
        let { userID } = res.data;
        if (userID) {
          setUserID(userID);
        } else {
          setUserID(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post("/api/dashboard").then((res) => {
      if (res.data !== "unauthorized request") {
        if (typeof res.data.error === "undefined") {
          isSeller(true);
        } else {
          isSeller(false);
        }
      } else {
        isSeller(false);
      }
    });
  }, [trigger]);

  const logout = () => {
    axios
      .post("/api/auth/logout")
      .then((res) => {
        setUserID(-1);
      })
      .catch((err) => {
        console.log(err);
      });

    setTrigger(prv => !prv);
    navigate("/");
  };
  return (
    <motion.div
      className="sidebar_container"
      animate={{ width: toggle ? "170px" : "60px" }}
    >
      <div className="icon">
        <motion.i
          className="fa-solid fa-bars"
          onClick={() => setToggle(!toggle)}
          animate={{ rotate: toggle ? 90 : 0 }}
        ></motion.i>
      </div>

      <div className="main_content">
        <ul>
          {/* User Icon */}
          {userID !== -1 ? (
            <>
              <li className="image_li" onClick={() => navigate("/profile")}>
                <div className="image">
                  <img
                    src={`http://localhost:${PORT}/api/img/user/userID/${userID}`}
                    alt="userImage"
                    title="Profile"
                  />
                </div>
                <span
                  className="pageName"
                  style={toggle ? null : { display: "none" }}
                >
                  Profile
                </span>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => navigate("/auth")}>
                <i
                  className="fa-regular fa-circle-user"
                  title="login"
                  style={{ fontSize: 25 }}
                ></i>
                <span
                  className="pageName"
                  style={toggle ? null : { display: "none" }}
                >
                  Login
                </span>
              </li>
            </>
          )}

          {/* Home */}
          <NavLink to="/">
            <li>
              <i className="fa-solid fa-house-chimney" title="Home"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                Home
              </span>
            </li>
          </NavLink>
          
          {/* wish-list */}
          {userID !== -1 && <NavLink to="/wish-list">
            <li>
              <i className="fa-solid fa-heart" title="Wish-List"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                Wish List
              </span>
            </li>
          </NavLink>}

          {/* Category */}
          {seller && (
            <NavLink to="/seller/dashboard">
              <li>
                <i className="fa-solid fa-gauge" title="Dashboard"></i>
                <span
                  className="pageName"
                  style={toggle ? null : { display: "none" }}
                >
                  Dashboard
                </span>
              </li>
            </NavLink>
          )}

          {/* Category */}
          <NavLink to="catagory">
            <li className="category_li catagory">
              <span>
              <i className="fa-solid fa-sitemap" title="Category"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                Category
              </span>
              </span>

              <ul className="sub-list">
                <NavLink to="/catagory">
                  <li className="food">Food</li>
                </NavLink>
                
                <NavLink to="/catagory">
                  <li className="solid">Solid</li>
                </NavLink>
              </ul>
            </li>
          </NavLink>

          {/* About */}
          <NavLink to="/about">
            <li>
              <i className="fa-solid fa-circle-info" title="About Us"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                About Us
              </span>
            </li>
          </NavLink>

          {/* About */}
          <NavLink to="/contact">
            <li>
              <i className="fa-solid fa-handshake" title="Contact Us"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                Contact Us
              </span>
            </li>
          </NavLink>

          {/* logout */}
          {userID !== -1 ? (
            <li className="logout" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket" title="Logout"></i>
              <span
                className="pageName"
                style={toggle ? null : { display: "none" }}
              >
                Logout
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
