import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/home/Home.jsx";

import AddItem from "./pages/addItem/addItem";

import SellerView from "./pages/seller_profile_for_customer/Seller_view.jsx";
import NotFound from "./pages/page_not_found/page_not_found.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/addItem" element={<AddItem />} />

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          {/* This is the can only use for already register as seller */}
          <Route path="/store" element={<SellerView />} />

          <Route path="/store/:id" element={<SellerView />} />

          <Route path="/auth" element={<Authentication />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
