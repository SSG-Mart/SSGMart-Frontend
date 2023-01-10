import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./seller_view.scss";
import SecTwo from "./sec_two";
import SecThree from "./sec_three";
import PopUp from "../../components/popup-item/popup-i";
// import Sidebar from "../navBar/Sidebar";
import Nav from "../navBar/Nav";

export default function Seller_view( props ) {
  const { store_name } = useParams();
  // if(typeof(store_name) != 'undefined') console.log(store_name);

  const [apiUserData, setApiUserData] = useState({});
  const [apiItemData, setApiItemData] = useState(null);
  const [popUpData, setPopUpData] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);

  //
  useEffect(() => {
    const getData = async () => {
      try {
        var res = await axios.post("/api/seller", { store_name: store_name });
        if (res.data) {
          // console.log(res.data);
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

  const clickShow = (e) => {
    // console.log("E : ",e);
    setPopUpData({
      item_name: e[0].name,
      description: e[0].description,
      unit_price: e[0].unit_price,
      unit: e[0].unit,
      store_name: e[1].store_name,
      city: e[1].city,
      mobile: e[1].mobile,
      item_image: e[0].image,
      user_image: e[1].image
    })
    setPopUpToggle(true)
  }
  
  const clickClose = () => {
    setPopUpToggle(false)
  }
  

  return (
    <>
    <div style={popUpToggle ? null : {display:'none'}}>
      <PopUp popUpData = {popUpData} clickClose={clickClose} />
    </div>
    <div className="seller_view_container">
      <div className="firs_sec">
      {/* <Sidebar /> */}
      <Nav />
      </div>

      <div className="second_sec">
        <SecTwo apiData={apiUserData} />
      </div>

      <div className="third_sec">
        <SecThree apiData={apiItemData} user_data={apiUserData} togglePopUp = {clickShow} />
      </div>
    </div>
    </>
  );
}
