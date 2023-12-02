import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./assets/loading/loading.gif";
import RouteContainer from "./RouteContainer";



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
        <div style={{ position: "absolute", height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}} >
          <img src={Loading} alt="loading_gif" style={{ width: "10vw" }} />
        </div>
      ) : (
          <RouteContainer isAuth={isAuth} />
      )}
    </div>
  );
}

export default App;
