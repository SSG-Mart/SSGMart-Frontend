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

  const item = [
    {
      id: 1,
      seller: true,
      path: "/",
      name: "Home",
      icon: "fa-solid fa-house-chimney",
    },
    {
      id: 2,
      seller: seller,
      path: "/seller/dashboard",
      name: "Dashboard",
      icon: "fa-solid fa-gauge",
    },
    {
      id: 3,
      seller: true,
      path: "/catagory",
      name: "Category",
      icon: "fa-solid fa-sitemap",
    },
    // {
    //   id: 3,
    // seller: true,
    //   path: "/store/ushan",
    //   name: "Store",
    //   icon: "fa-solid fa-store",
    // },
  ];

  const logout = () => {
    axios
      .post("/api/auth/logout")
      .then((res) => {
        setUserID(-1);
        setUserID(-1);
      })
      .catch((err) => {
        console.log(err);
      });

    setTrigger(!trigger);
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

          {item.map((item) => {
            if (item.seller === false) {
              return null;
            }
            if (item.id === 3) {
              return (
                <NavLink key={item.id} to={item.path} activeclassname="active">
                  <li>
                    <i className={item.icon} title={item.name}></i>
                    <span
                      className="pageName"
                      style={toggle ? null : { display: "none" }}
                    >
                      {item.name}
                    </span>
                  </li>
                </NavLink>
              );
            }
            return (
              <NavLink key={item.id} to={item.path} activeclassname="active">
                <li>
                  <i className={item.icon} title={item.name}></i>
                  <span
                    className="pageName"
                    style={toggle ? null : { display: "none" }}
                  >
                    {item.name}
                  </span>
                </li>
              </NavLink>
            );
          })}

          {/* About */}
          <NavLink to="/about" activeclassname="active">
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
          <NavLink to="/contact" activeclassname="active">
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
