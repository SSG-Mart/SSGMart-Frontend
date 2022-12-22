import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./seller_view.scss";
import SecTwo from "./sec_two";
import SecThree from "./sec_three";

export default function Seller_view() {
  const { store_name } = useParams();
  // if(typeof(store_name) != 'undefined') console.log(store_name);

  const [apiUserData, setApiUserData] = useState({});
  const [apiItemData, setApiItemData] = useState(null);

  //
  useEffect(() => {
    const getData = async () => {
      try {
        var res = await axios.post("/api/seller", { store_name: store_name });
        if (res.data) {
          setApiUserData(res.data.data1[0]);
          setApiItemData(res.data.data2);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="seller_view_container">
      <div className="firs_sec"></div>

      <div className="second_sec">
        <SecTwo apiData={apiUserData} />
      </div>

      <div className="third_sec">
        <SecThree apiData={apiItemData} user_data={apiUserData} />
      </div>
    </div>
  );
}
