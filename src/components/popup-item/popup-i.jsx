import React, { useState } from "react";
import "./popup-i.scss";
import { AiOutlineClose, AiOutlinePhone } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";

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

function Popupi(props) {
  // wishList
  const [state, setState] = useState(false);
  const [api, setAPI] = useState({});
  
  const toggle = () => {
    setState(!state);
  };
  //   star Rating
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    setAPI(props.popUpData)
  }, [props.popUpData, api]);

  return (
    <div className="main-s">
      <div className="main">
        <div className="popup">
          <button className="close" onClick={props.clickClose}>
            <AiOutlineClose size={20} color="white"  />
          </button>

          <div className="details">
            <div className="photo" style={{width: '40%', overflow: 'hidden', display:'flex', justifyContent:'center', alignItems:'center'}}>
              {
                api.item_image ? <img src={require(`../../../../ssg_mart-backend/img/item_image/${api.item_image}`)} alt="item_image" style={{width: '100%'}} /> :null
              }
              
            </div>
            <div className="prgph">
              <h1>{api.item_name}</h1>
              <p>
                {api.description}
              </p>
              <div className="pri">
                <hr />
                <p>
                  RS.{api.unit_price} <span>/ 1{api.unit}</span>
                </p>
                <hr />
              </div>
              <div className="prodetail">
                <div className="wrish">
                  <span
                    onClick={toggle}
                    className={
                      "toggle--button" + (state ? "toggle--close" : "")
                    }
                  >
                    {state ? (
                      <FaHeart color="red" size={20} />
                    ) : (
                      <FaRegHeart color="red" size={20} />
                    )}
                  </span>{" "}
                  {state ? "Added" : "Add wish List"}
                </div>
                <div className="poto" style={{width: '60px', height: '60px', overflow: 'hidden', display:'flex', justifyContent:'center', alignItems:'center'}}>
                  {
                    api.user_image ? <img src={require(`../../../../ssg_mart-backend/img/user/${api.user_image}`)} alt="user_image" style={{width: '60px'}} /> : null
                  }
                  
                </div>
                <div className="nameAndStar">
                  <div className="name">
                    {api.store_name}
                    <span>
                      <BiMessageRoundedDots />
                    </span>
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
                  <div className="location1">
                    <GrLocation size={35} /> {api.city}
                  </div>
                  <div className="location2">
                    <AiOutlinePhone size={35} /> {api.mobile}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popupi;
