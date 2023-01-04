import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loading from './assets/loading/loading.gif'

import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/home/Home.jsx";
import AddItem from "./components/addItem/addItem";
import Selldb from "./pages/Sellers_dashboard/selldb.jsx";

import SellerView from "./pages/seller_profile_for_customer/Seller_view.jsx";
import NotFound from "./pages/page_not_found/page_not_found.jsx";

import PopupItem from "./components/popup-item/popup-i";

import Catagory from "./pages/categoryHome/CatagoryPage";

import About from "./pages/AboutUs/about";


function App() {
  const [isAuth, setIsAuth] = useState(404);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        var res = await axios.post("/api/auth/checkAuth");
        if (res.data.userID) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {isAuth === 404 ? (
        <div style={{position:'absolute',height:'100vh', width: '100vw',display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={Loading} alt="loading_gif" style={{width: '10vw'}} />
        </div>
      ) : (
        <>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/seller/dashboard" element={<Selldb />} />
            <Route path="/Item/Popup" element={<PopupItem />} />


            {/* This is the can only use for already register as seller */}
            {/* <Route path="/store" element={<SellerView />} /> */}

            <Route path="/store/:store_name" element={<SellerView />} />
            <Route path="additem" element={<AddItem />} />


          <Route path="*" element={<NotFound />} />
          <Route path="/catagory" element={<Catagory />} />

            <Route
              path="/auth"
              element={isAuth === true ? <Home /> : <Authentication />}
            />


            <Route path="*" element={<NotFound />} />

            {/* This is a about us page in this website */}
            <Route path="/about.us" element={<About />} />
          </Routes>
        </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
