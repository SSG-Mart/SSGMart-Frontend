import React from "react";
import Logo from '../../assets/ssg_mart.png'
import { useNavigate } from "react-router-dom";

const SecTwo = (props) => {
  const navigate = useNavigate();
  const api_data = props.apiData;
  let compleatDate = new Date(api_data.date_of_register);
  let date = compleatDate.getDate()+"/"+(compleatDate.getMonth()+1)+"/"+compleatDate.getFullYear();

  return (
    <>
      <div className="details" onClick={() => navigate('/')}>
        <div className="logo">
          <span className="image">
            <img src={Logo} alt="logo" />
          </span>
          <span className="text">SSGMart</span>
        </div>

        <div className="second_sec_in_details">
          <div className="user_image">
            {
              api_data.image ? <img src={require(`../../../../ssg_mart-backend/img/user/${api_data.image}`)} alt="user" /> : null 
            }
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
              {date}
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
