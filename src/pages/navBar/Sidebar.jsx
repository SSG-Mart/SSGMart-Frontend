import React, { useState } from 'react';
import {
    FaTh,
    FaHome,
    FaBell,
    FaBookOpen,
    FaCompass
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Sidebar.scss";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<FaBell/>
        },
        {
            path:"/Compas",
            name:"Compas",
            icon:<FaCompass/>
        },
        {
            path:"/Category",
            name:"Category",
            icon:<FaBookOpen/>
        },
        
    ]
    return (
        <div className="sidebar-container">
           <div style={{width: isOpen ? "250px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">SSGmart</h1>
                   <div style={{marginLeft: isOpen ? "75px" : "0px"}} className="bars">
                       <FaTh onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;