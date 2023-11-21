import React from "react";
import Logo from '../../assets/ssg_mart.png'
import { useNavigate } from "react-router-dom";
import UserLoading from '../../assets/loading/user loading/user_loading001.gif'

const SecTwo = (props) => {
  const navigate = useNavigate();
  const api_data = props.apiData;
  let compleatDate = new Date(api_data.date_of_register);
  let date = compleatDate.getDate()+"/"+(compleatDate.getMonth()+1)+"/"+compleatDate.getFullYear();

  return (
    <>
      <div className="details">
        <div className="logo"  onClick={() => navigate('/')}>
          <span className="image">
            <img src={Logo} alt="logo" />
          </span>
          <span className="text">SSGMart</span>
        </div>

        <div className="second_sec_in_details">
          <div className="user_image">
            {
              api_data.image ? <img src={`http://localhost:8080/api/img/user/${api_data.image}`} alt="user" /> : <img src={UserLoading} alt="loading_image" /> 
            }
          </div>
          <h3 className="seller_name">{api_data.store_name}</h3>

          <div className="status">
            {
              api_data.verify_seller === 1 ?(
                <div style={{backgroundColor:"#03C988", color:"#fff"}}>
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="status_text">Verify Seller</span>
                </div>
              )
              :
              (
                <div style={{backgroundColor:"#F16767", color:"#eee"}}>
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="status_text">Seller Not Verify</span>
                </div>
              )
            }
            
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
