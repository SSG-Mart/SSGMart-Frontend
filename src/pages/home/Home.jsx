import React, {useState} from "react";
import Sidebar from "../navBar/Sidebar";
import SearchBar from "./searchBar/searchBar";
import HomePage from "./HomePage/homePage";
import "./Home.scss";
import PopUp from "../../components/popup-item/popup-i"

export default function Home() {
  const [data, setData] = useState({});
  const [popUpState, setPopUpState] = useState(false);
  
  const clickClose = () => {
    setPopUpState(false);
  }
  
  const showPopUp = (e) => {
    setData(e);
    setPopUpState(true);
  }

  const setPopUpData = e => {
    let data = {
      item_name: e.name,
      description: e.description,
      unit_price: e.unit_price,
      unit: e.unit,
      store_name: e.store_name,
      city: e.district_name,
      mobile:e.mobile,
      item_image:e.image,
      user_image:e.user_image
    }
    showPopUp(data);
  }

  

  return (
    <>
    <div style={popUpState ? null : {display: 'none'}}>
      <PopUp popUpData = {data} clickClose={clickClose} />
    </div>
    <div className="home-container">
      <Sidebar />
      <SearchBar />
      <HomePage setPopUpData={setPopUpData} showPopUp={showPopUp} />
    </div>
    </>
  );
}
