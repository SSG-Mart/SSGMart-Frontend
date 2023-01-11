import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const item = [
    {
      id: 1,
      path: "/",
      name: "Home",
      icon: "fa-solid fa-house-chimney",
    },
    {
      id: 2,
      path: "/seller/dashboard",
      name: "Dashboard",
      icon: "fa-solid fa-gauge",
    },
    // {
    //   id: 3,
    //   path: "/store/ushan",
    //   name: "Store",
    //   icon: "fa-solid fa-store",
    // },
  ];

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
          {item.map((item) => {
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
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
