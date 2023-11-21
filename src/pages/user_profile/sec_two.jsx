import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from 'react-uuid';
import { PORT } from "../../util";
// import Logo from '../../assets/ssg_mart.png'
// import { useNavigate } from "react-router-dom";
// import UserLoading from '../../assets/loading/user loading/user_loading001.gif'

const SecTwo = (props) => {

  const [userID, setUserID] = useState(-1);
  const [select, setSelect] = useState("");

  useEffect(() => {
    setSelect(props.apiUserData.district_id);
  },[props.apiUserData])

  const city = [
    {value: "1", cityName: "Colombo"},
    {value: "2", cityName: "Kalutara"},
    {value: "3", cityName: "Kandy"},
    {value: "4", cityName: "Matale"},
    {value: "5", cityName: "Nuwara"},
    {value: "6", cityName: "Galle"},
    {value: "7", cityName: "Matara"},
    {value: "8", cityName: "Hambantota"},
    {value: "9", cityName: "Jaffna"},
    {value: "10", cityName: "Kilinochchi"},
    {value: "11", cityName: "Mannar"},
    {value: "12", cityName: "Vavuniya"},
    {value: "13", cityName: "Mullaitivu"},
    {value: "14", cityName: "Batticaloa"},
    {value: "15", cityName: "Ampara"},
    {value: "16", cityName: "Trincomalee"},
    {value: "17", cityName: "Kurunegala"},
    {value: "18", cityName: "Puttalam"},
    {value: "19", cityName: "Anuradhapura"},
    {value: "20", cityName: "Polonnaruwa"},
    {value: "21", cityName: "Badulla"},
    {value: "22", cityName: "Moneragala"},
    {value: "23", cityName: "Ratnapura"},
    {value: "24", cityName: "Kegalle"},
  ]


  useEffect(() => {
    axios
      .post("/api/auth/checkAuth")
      .then((res) => {
        let { userID } = res.data;
        if (userID) {
          setUserID(userID);
        } else {
          setUserID(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updateData(e){
    e.preventDefault();
    // console.log(e.target.f_name.value);
    // console.log(e.target.l_name.value);
    // console.log(e.target.mobile_number.value);
    // console.log(e.target.add.value);
    // console.log(e.target.city.value);

    const data = {
      f_name: e.target.f_name.value,
      l_name: e.target.l_name.value,
      mobile: e.target.mobile_number.value,
      address_one: e.target.add.value,
      city: e.target.city.value,
    };

    axios.post("/api/user/update", data)
    .then((res) => {
      console.log(res);
      if(res.data === "updated"){
        props.setTrigger(e => !e)
        alert("Updated");
      }
      else{
        alert("Update Failed..!");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="container">
        <div className="profile_pic">
          <img
            src={`http://localhost:${PORT}/api/img/user/userID/${userID}`}
            alt="userImage"
            title="Profile"
          />
        </div>

        <div className="form">
          <form onSubmit={(e) => updateData(e)}>
            <div className="form_container">
              <div className="left section">
                <div className="sec">
                  <label htmlFor="f_name">First Name</label>
                  <input
                    type="text"
                    id="f_name"
                    name="f_name"
                    placeholder="Enter your first name"
                    required
                    defaultValue={props.apiUserData.f_name}
                  />
                </div>

                <div className="sec">
                  <label htmlFor="l_name">Last Name</label>
                  <input
                    type="text"
                    id="l_name"
                    required
                    defaultValue={props.apiUserData.l_name}
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="sec">
                  <label htmlFor="user_name">User Name</label>
                  <input
                    type="text"
                    id="user_name"
                    disabled={true}
                    required
                    defaultValue={props.apiUserData.user_name}
                  />
                </div>

                <div className="sec">
                  <label htmlFor="mobile_number">Mobile</label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    id="mobile_number"
                    placeholder="0711111111"
                    defaultValue={props.apiUserData.mobile}
                    required
                  />
                </div>
              </div>

              <div className="right section">
                <div className="sec">
                  <label htmlFor="e_main">Email</label>
                  <input
                    type="email"
                    id="e_mail"
                    disabled={true}
                    defaultValue={props.apiUserData.email}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="sec">
                  <label htmlFor="add">Address</label>
                  <input
                    type="address"
                    id="add"
                    defaultValue={props.apiUserData.address_one}
                    placeholder="Enter your address"
                    required
                  />
                </div>

                <div className="sec">
                  <label htmlFor="city">City</label>
                  <select id="city" value={select} onChange={(e) => setSelect(e.target.value)}>
                    {
                      city.map(data => {
                          return(
                            <option key={uuid()} value={data.value} >{data.cityName}</option>
                          )
                      })
                    }
                    
                  </select>
                </div>
              </div>
            </div>
            <div className="button">
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SecTwo;
