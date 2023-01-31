import React, { useEffect, useState } from "react";
import "./seller_view.scss";
import SecTwo from "./sec_two";
import axios from "axios";

// import Sidebar from "../navBar/Sidebar";
import Nav from "../navBar/Nav";

export default function UserProfile( props ) {
  const [apiUserData, setApiUserData] = useState({});

  const [trigger, setTrigger] = useState(false);

  //
  useEffect(() => {
    const getData = async () => {
      try {
        var res = await axios.post("/api/user");
        if (res.data) {
          // console.log(res.data);
          setApiUserData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [trigger]);

  console.log(apiUserData);
  

  return (
    <>

    <div className="user_view_container">
      <div className="firs_sec">
      {/* <Sidebar /> */}
      <Nav />
      </div>

      <div className="second_sec">
        <SecTwo apiUserData={apiUserData} setTrigger={setTrigger} />
      </div>
    </div>
    </>
  );
}
