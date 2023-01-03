import React from "react";
import "./homePage.scss";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function HomePage(props) {
  const [itemdata, setitemData] = useState([])

  useEffect(()=>{
    axios.post("/api/home")
    .then(res => {
      setitemData(res.data)
    }).catch(err => console.log(err))
  }, [])


  const arr = itemdata.map ((data, key)=>{
    return(
      <div className="card-frame" key={key}>
      <div className="img1">
        <img src={`api/img/item/${data.image}`} alt="itemImage" />
      </div>
      <p className="shop-name">{data.store_name}</p>
      <p className="item-name">{data.name}</p>
      <p className="price">Rs.{data.unit_price}.00</p>
      <button onClick={() => props.setPopUpData(data)}>See Details</button>
    </div>
    )
  })
  return (
    <div className="home-container">
      <div className="left">
      </div>

      <div className="right">
        <div className="item-list">

          {arr}

        </div>
      </div>
    </div>
  );
}
