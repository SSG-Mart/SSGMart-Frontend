import React, { useState } from "react";
import "./popup-i.scss";
import { AiOutlineClose, AiOutlinePhone } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

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

function Popupi() {
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
    <div className="main-s">
      <div className="main">
        <div className="popup">
          <button className="close">
            <AiOutlineClose size={20} color="white" />
          </button>

          <div className="details">
            <div className="photo"></div>
            <div className="prgph">
              <h1>Tomatoes</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="pri">
                <hr />
                <p>
                  RS.220.00 <span>/ 1kg</span>
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
                <div className="poto"></div>
                <div className="nameAndStar">
                  <div className="name">
                    Imeshika_123{" "}
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
                    <GrLocation size={35} /> Habarana Jugle
                  </div>
                  <div className="location2">
                    <AiOutlinePhone size={35} /> +9471-1025032
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
