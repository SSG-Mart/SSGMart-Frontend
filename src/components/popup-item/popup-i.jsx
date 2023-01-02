import React, { useState } from "react";
import "./popup-i.scss";
import Itempicture from "./tom.PNG";
import Profilepic from "./pro.jpeg";
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
        class={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function Itempopup() {
    // wishList
    const [state, setState] = useState(false);
    const toggle = () => {
      setState(!state);
    };
    //   star Rating
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="main_container">
      <div className="card">
        
        <div className="left">
          <img className="itempicture" src={Itempicture} alt="item_picture" />
        </div>
        <div className="right">
          <h1>Tomatoes</h1>
          <div className="discribtion">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <hr />
          <div className="price">
            <h2>
              Rs.220.00 <span>/1kg</span>
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
              <img className="pro_pic" src={Profilepic} alt="Profile_picture" />
            </div>
            <div className="name">
              <div className="nameandmassage">
                <h3>Imeshika_123</h3>
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
                  Habarana town
                </div>
                <div className="number">
                  <BsPhone color="gray" />
                  071-1025032
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="close">
            <IoClose color="white" size={30} />
          </div>
      </div>
    </div>
  );
}

export default Itempopup;
