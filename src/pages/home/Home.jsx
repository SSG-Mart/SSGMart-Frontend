import React, { useEffect, useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

export default function Home() {
  const [home, setHome] = useState("");
  const [trigger,setTrigger] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
        try {
            var res = await axios.post('api/home');
            setHome(res.data);
        } catch (err) {
            console.log(err);
        }
        
    }
    fetchData();
  }, [trigger]);

  const logOut = async(e) => {
    e.preventDefault();

    var res = await axios.post('api/auth/logout');
    if(res.status === 200) {
        console.log("logged out successfully");
    }
    else {
        console.log("logged out error");
    }
    setTrigger(!trigger)
  }

  return <div>
    <h1>{home}</h1>
    <button onClick={logOut}>Log Out</button>
  </div>;
}

