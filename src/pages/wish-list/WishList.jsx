import React, { useEffect, useState } from 'react'
import Nav from '../navBar/Nav'
import './wish-list.scss'
import '../seller_profile_for_customer/seller_view.scss'
import CardThirdSec from '../seller_profile_for_customer/card_third_sec'
import axios from 'axios'
import PopUp from '../../components/popup-item/popup-i'

const WishList = () => {
  const [apiUserData, setApiUserData] = useState(null);
  const [apiItemData, setApiItemData] = useState(null);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const[popUpData,setPopUpData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try{
        var res = await axios.get("api/user/wish-list");
        if (res.data) {
          console.log("User Data", res.data);
          setApiUserData(res.data.user_data)
          
          setApiItemData(res.data.item_data)
        }
        else{
          console.log(res);
        }
      }
      catch(err){
        console.log(err);
      }

    }
    getData()
  },[])

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
  if(apiUserData && apiItemData) return (
    <>
    <div style={popUpToggle ? null : {display:'none'}}>
      <PopUp popUpData = {popUpData} clickClose={clickClose} />
    </div>
    <div id='wish-list-container'>
      <div className="nav"><Nav /></div>

      <div className="content">
        <h2>Wish List</h2>
        <div className="grid card_container">
          {
            apiItemData.map((item, index) => {
              return(
                <>
                  <CardThirdSec key={index} apiData={item} userData={apiUserData} togglePopUp = {clickShow} />
                </>
              )
            })
          }
          {/* <CardThirdSec apiData={apiItemData} userData={apiUserData} togglePopUp = {popUpToggle} /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default WishList