import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom"
import "./popup-i.scss";
// import Itempicture from "./tom.PNG";
// import Profilepic from "./pro.jpeg";
import { ImLocation } from "react-icons/im";
import { BsPhone } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PORT } from "../../util";
import axios from "axios";



function Itempopup(props) {
  const navigate = useNavigate();
  // wishList
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  //   star Rating
  const [like, setLike] = useState(null);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];


  // get data
  useEffect(() => {
    const getLike = async () => {
      try{
        var res = await axios.get("/api/seller/like/"+props.item_id);
        if (res.data) {
          console.log("Like Data 122", res.data);
          if(res.data === "login first"){
            setLike(null)
          }
          else{
            console.log("Hello", props.item_id);
            setLike(res.data.like)
          }
        }
        else{
          console.log(res);
        }
      }
      catch(err){
        console.log(err);
      }

    }

    getLike()

    console.log(data);
  }, [like])



  // Set data ( ushan )
  let data = props.popUpData;

  const gotoSellerProfile = (store_name) => {
      navigate(`/store/${store_name}`);
  }

  return (
    <div className="main_container">
      <div className="card">
        <div className="left">
          <img
            className="itempicture"
            src={`http://localhost:${PORT}/api/img/item/${data.item_image}`}
            alt="item_picture"
          />
        </div>
        <div className="right">
          <h1>{data.item_name}</h1>
          <div className="discribtion">
            <p>{data.description}</p>
          </div>
          <hr />
          <div className="price">
            <h2> 
              Rs.{data.unit_price} <span>/1{data.unit}</span>
            </h2>
            
          </div>
         {data.discount > 0 ? <div className="descount">
            <div className="precentage">
              <span className="dot"><b>o</b></span>
              <span className="despres"><b>{data.discount}%</b></span>
              <span className="off"><b>OFF</b></span>

            </div>
            <div className="New_Price">
              <span className="now"><b>NOW</b></span><br />
              <span className="off"><b>Rs. {data.unit_price-((data.unit_price*data.discount)/100)}</b></span>
            </div>
          </div> : null}
          <hr />
          <div className="wrish">
            <span
              onClick={toggle}
              className={"toggle--button" + (state ? "toggle--close" : "")}
            >
              {like ? (
                <FaHeart color="red" size={20} />
              ) : (
                <FaRegHeart color="red" size={20} />
              )}
             </span>{" "}
            {/*{state ? "Added" : "Add wish List"} */}
          </div>
          <div className="profmain">
            <div className="profile">
              <img className="pro_pic" src={`http://localhost:${PORT}/api/img/user/${data.user_image}`} alt="Profile_picture" />
            </div>
            <div className="name">
              <div className="nameandmassage">
                <h3 onClick={() => gotoSellerProfile(data.store_name)}>{data.store_name}</h3>
                <MdMessage className="massageicon" color="#3D64EE" size={27} />
              </div>
              <div className="flex-container">
                {/* {stars.map((star, i) => (
                  <Star
                    key={i}
                    starId={i}
                    rating={hoverRating || rating}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(i)}
                  />
                ))} */}
              </div>
              <div className="contact">
                <div className="location">
                  <ImLocation color="gray" />
                  {data.city}
                </div>
                <div className="number">
                  <BsPhone color="gray" />
                  {data.mobile}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="close" onClick={() => props.clickClose()}>
          <IoClose color="white" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Itempopup;
