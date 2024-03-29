import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/home/Home.jsx";
import UserProfile from "./pages/user_profile/User_profile_view";
import Selldb from "./pages/Sellers_dashboard/selldb.jsx";
import SellerView from "./pages/seller_profile_for_customer/Seller_view.jsx";
import SolidCatagory from "./pages/CatagoryPage/SolidCatagory";
import About from "./pages/AboutUs/about";
import Contact from "./pages/Contactus/contact";
import NotFound from "./pages/page_not_found/page_not_found.jsx";
import WishList from "./pages/wish-list/WishList";
import AuthLayout from "./layouts/AuthLayout.jsx";
import OtherLayout from "./layouts/OtherLayout.jsx";
import FoodCatagory from "./pages/CatagoryPage/FoodCatagory.jsx";

const RouteContainer = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="/auth"
            element={<Authentication />}
          />
        </Route>
        <Route path="/" element={<OtherLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/seller/dashboard" element={<Selldb />} />
          <Route path="/store/:store_name" element={<SellerView />} />
          <Route path="/catagory/solid" element={<SolidCatagory />} />
          <Route path="/catagory/food" element={<FoodCatagory />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/wish-list"
            element={<WishList />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteContainer;
