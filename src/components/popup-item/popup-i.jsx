import React, { useState } from "react";
import {useNavigate } from "react-router-dom"
import "./popup-i.scss";
// import Itempicture from "./tom.PNG";
// import Profilepic from "./pro.jpeg";
import { ImLocation } from "react-icons/im";
import { BsPhone } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// star ratind
const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="30px"
        width="30px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function Itempopup(props) {
  const navigate = useNavigate();
  // wishList
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  //   star Rating
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

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
            src={`http://localhost:8080/api/img/item/${data.item_image}`}
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
          <hr />
          <div className="wrish">
            <span
              onClick={toggle}
              className={"toggle--button" + (state ? "toggle--close" : "")}
            >
              {state ? (
                <FaHeart color="red" size={20} />
              ) : (
                <FaRegHeart color="red" size={20} />
              )}
            </span>{" "}
            {state ? "Added" : "Add wish List"}
          </div>
          <div className="profmain">
            <div className="profile">
              <img className="pro_pic" src={`http://localhost:8080/api/img/user/${data.user_image}`} alt="Profile_picture" />
            </div>
            <div className="name">
              <div className="nameandmassage">
                <h3 onClick={() => gotoSellerProfile(data.store_name)}>{data.store_name}</h3>
                <MdMessage className="massageicon" color="#3D64EE" size={27} />
              </div>
              <div className="flex-container">
                {stars.map((star, i) => (
                  <Star
                    key={i}
                    starId={i}
                    rating={hoverRating || rating}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(i)}
                  />
                ))}
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
