import React from "react";
import Logo from '../../assets/ssg_mart.png'
import User from '../../assets/user.png'

const SecTwo = (props) => {
  // console.log(props.apiData);
  const api_data = props.apiData;
  return (
    <>
      <div className="details">
        <div className="logo">
          <span className="image">
            <img src={Logo} alt="logo" />
          </span>
          <span className="text">SSGMart</span>
        </div>

        <div className="second_sec_in_details">
          <div className="user_image">
            <img src={User} alt="user" />
          </div>
          <h3 className="seller_name">{api_data.store_name}</h3>

          <div className="status">
            <span className="circle" style={{ background: "green" }}></span>
            <span className="current_status">Online</span>
          </div>

          <div className="ratings" style={{display: 'none'}}>
            <div className="rating_stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className="rating_number">4.5</span>
          </div>
        </div>

        <hr className="hr1" />

        <div className="store_information">
          <div className="from list_item">
            <span className="first_element">
              <i className="fa-solid fa-location-dot"></i>
              From
            </span>
            <span className="second_element">{api_data.city}</span>
          </div>

          <div className="member_since list_item">
            <span className="first_element">
              <i className="fa-solid fa-user"></i>
              Member Since
            </span>
            <span className="second_element">
              {api_data.date_of_register}
            </span>
          </div>

          <div className="mobile list_item">
            <span className="first_element">
              <i className="fa-solid fa-mobile-screen-button"></i>
              Mobile
            </span>
            <span className="second_element">{api_data.mobile}</span>
          </div>
        </div>
      </div>
      {/* details */}
    </>
  );
};

export default SecTwo;
