import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
