import React, { useState, useEffect } from "react";
import axios from "axios";
// import Logo from '../../assets/ssg_mart.png'
// import { useNavigate } from "react-router-dom";
// import UserLoading from '../../assets/loading/user loading/user_loading001.gif'

const SecTwo = (props) => {

  const [userID, setUserID] = useState(-1);



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
            src={`http://localhost:8080/api/img/user/userID/${userID}`}
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
                  <select defaultValue={`${props.apiUserData.district_id}`} id="city">
                    <option value="1">Colombo</option>
                    <option value="2">Kalutara</option>
                    <option value="3">Kandy</option>
                    <option value="4">Matale</option>
                    <option value="5">Nuwara Eliya</option>
                    <option value="6">Galle</option>
                    <option value="7">Matara</option>
                    <option value="8">Hambantota</option>
                    <option value="9">Jaffna</option>
                    <option value="10">Kilinochchi</option>
                    <option value="11">Mannar</option>
                    <option value="12">Vavuniya</option>
                    <option value="13">Mullaitivu</option>
                    <option value="14">Batticaloa</option>
                    <option value="15">Ampara</option>
                    <option value="16">Trincomalee</option>
                    <option value="17">Kurunegala</option>
                    <option value="18">Puttalam</option>
                    <option value="19">Anuradhapura</option>
                    <option value="20">Polonnaruwa</option>
                    <option value="21">Badulla</option>
                    <option value="22">Moneragala</option>
                    <option value="23">Ratnapura</option>
                    <option value="24">Kegalle</option>
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
