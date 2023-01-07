import React from "react";
import "./homePage.scss";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function HomePage(props) {
  const [itemdata, setitemData] = useState([])
  const [searchData, setSearchData] = useState("")
  const [arr, setArr] = useState()

  useEffect(() => {
    setSearchData(props.searchData)
  }, [searchData,props.searchData]);

  useEffect(()=>{
    axios.post("/api/home")
    .then(res => {
      if(res.data !== "No data found"){
        setitemData(res.data)
      }
      else console.log("No data found");
    }).catch(err => console.log(err))
  }, [searchData])


  
  useEffect(() => {
    let arr =  itemdata.map ((data, key)=>{
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

    setArr(arr)

    console.log(searchData);
    // eslint-disable-next-line
  }, [searchData])
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
