import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/home/Home.jsx";

import AddItem from "./pages/addItem/addItem";
import Selldb from "./pages/Sellers_dashboard/selldb.jsx";

import SellerView from "./pages/seller_profile_for_customer/Seller_view.jsx";
import NotFound from "./pages/page_not_found/page_not_found.jsx";

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
        <div>Loading...</div>
      ) : (
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/seller/dashboard" element={<Selldb />} />

            {/* This is the can only use for already register as seller */}
            <Route path="/store" element={<SellerView />} />

            <Route path="/store/:store_name" element={<SellerView />} />

            <Route
              path="/auth"
              element={isAuth === true ? <Home /> : <Authentication />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
