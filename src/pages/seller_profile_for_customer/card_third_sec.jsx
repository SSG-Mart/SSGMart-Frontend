import React from "react";
import sampleImage from "../../assets/authentication/authentication_background.jpg";
import User from "../../assets/user.png";

const CardThirdSec = () => {
  return (
    <>
      <div className="card">
        <div className="item_image">
          <img src={sampleImage} alt="sampleImage" />
        </div>

        <div className="seller_info">
          <div className="image">
            <img src={User} alt="userProfile" />
          </div>

          <div className="information">
            <p className="name">Ushan</p>
            <p className="ratings">
              <i className="fa-solid fa-star"></i> 4/5
            </p>
          </div>
        </div>

        <div className="description">
          <p className="title">Potato</p>
          <p className="phrase">
            My name is Ushan Chamod Bandara and my age is 21 years old.{" "}
            <span>...More</span>{" "}
          </p>
          <p className="ending">Ending in: 24h 28 min 04s</p>
        </div>

        <hr />

        <div className="bottom">
          <div className="chat"></div>
          <div className="price">
            RS. 220.00 <span>/kg</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThirdSec;
