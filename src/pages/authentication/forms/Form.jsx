import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./authentication_form.scss";
import NotificationMessage from "../../../components/notification_message";

export default function Form() {
  const navigation = useNavigate();

  const [choseMethod, setChoseMethod] = useState(true); // if true that mean 'login' and false mean select 'sign up'

  //notification message
  const [notificationText, setNotificationText] = useState("");
  const [notificationColor, setNotificationColor] = useState("");
  const [notificationStyle, setNotificationStyle] = useState(false);

  // SIGN UP FORM DATA
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [cityID, setCityID] = useState("");
  const [addressLine1, setAddress1] = useState("");
  const [image, setImage] = useState({
    file: [],
  });
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  // LOGIN FORM DATA
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginUserNameError, setLoginUserNameError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);

  // Login Submit
  const pressLogin = (e) => {
    e.preventDefault();

    if (loginUserName === "") {
      setLoginUserNameError(true);
      return false;
    } else {
      setLoginUserNameError(false);
    }

    if (loginPassword === "") {
      setLoginPasswordError(true);
      return false;
    } else {
      setLoginPasswordError(false);
    }

    if (!loginUserNameError && !loginPasswordError) {
      axios
        .post("/api/auth/login", {
          userName: loginUserName,
          password: loginPassword,
        })
        .then((response) => {
          if (response.data.user) {
            navigation("/");
          } else {
            setNotificationText("User name or password is incorrect");
            setNotificationColor("red");
            setNotificationStyle(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Register Submit
  // form validation
  const [totalError, setTotalError] = useState(0);

  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [address1Error, setAddress1Error] = useState(false);
  const [cityError, setCityError] = useState(false);

  const [imageError, setImageError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [checkboxError, setCheckBoxError] = useState(false);

  // special error validation
  const [userNameErrorText, setUserNameErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");
  const [PasswordErrorText, setPasswordErrorText] = useState("");

  const handleImageInputChange = (e) => {
    setImage({
      //   ...image,
      file: e.target.files[0],
    });
  };

  const submitImage = async () => {
    const formData = new FormData();

    formData.append("avatar", image.file);
    axios
      .post("/api/auth/avatar_submit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data === "Please select a file to upload") {
          return false;
        } else {
          if (res.data === "Avatar upload success") {
            submitData();
          } else {
            setChoseMethod(!choseMethod);
            setNotificationColor("#38E54D");
            setNotificationText("Registration successful");
            setNotificationStyle(true);
          }
        }
      });
  };

  const pressRegister = (e) => {
    e.preventDefault();

    // form validation

    setTotalError(0); // reset total error

    if (fName.trim() === "") {
      setFNameError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setFNameError(false);
    }

    if (lName.trim() === "") {
      setLNameError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setLNameError(false);
    }
    if (lName.trim() === "") {
      setLNameError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setLNameError(false);
    }

    if (username.trim() === "") {
      setUserNameErrorText("Username is required");
      setUsernameError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setUsernameError(false);
    }

    if (mobile.trim() === "") {
      setMobileError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setMobileError(false);
    }

    if (email.trim() === "") {
      setEmailErrorText("Email is required");
      setEmailError(true);
      setTotalError(totalError + 1);
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailErrorText("Email is not valid");
      setEmailError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setEmailError(false);
    }

    if (addressLine1.trim() === "") {
      setAddress1Error(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setAddress1Error(false);
    }
    
    if (cityID.trim() === "") {
      setCityError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setCityError(false);
    }
    
    if (image.file.length === 0) {
      setImageError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setImageError(false);
    }

    if (password1.trim() === "") {
      setPassword1Error(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setPassword1Error(false);
    }

    if(password1.length < 8){
      setPasswordErrorText("Password must be at least 8 characters");
      setPassword1Error(true);
      setTotalError(totalError + 1);
      return false;
    }
    else{
      setPassword1Error(false);
    }

    if (password2.trim() === "") {
      setConfirmPasswordErrorText("Confirm password is required");
      setPassword2Error(true);
      setTotalError(totalError + 1);
      return false;
    } else if (password1 !== password2) {
      setConfirmPasswordErrorText("Password does not match");
      setPassword2Error(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setPassword2Error(false);
    }

    if (checkbox === false) {
      setCheckBoxError(true);
      setTotalError(totalError + 1);
      return false;
    } else {
      setCheckBoxError(false);
    }

    if (totalError === 0) {
      submitImage();
    }
  };

  const submitData = () => {
    let formData = {
      firstName: fName,
      lastName: lName,
      userName: username,
      mobile: mobile,
      email: email,
      addressLine1: addressLine1,
      city_id: cityID,
      image: "image",
      password1: password1,
      password2: password2,
      checkbox: checkbox,
    };
    axios
      .post("/api/auth/register", { formData })
      .then((response) => {
        if (response.data.data.msg) {
          if (response.data.data.msg === "User name already exist") {
            setUserNameErrorText("User name already exist");
            setUsernameError(true);
            setTotalError(totalError + 1);
            return false;
          } else {
            setUsernameError(false);
          }

          if (response.data.data.msg === "Email already exist") {
            setEmailErrorText("Email already exist");
            setEmailError(true);
            setTotalError(totalError + 1);
            return false;
          } else {
            setEmailError(false);
          }

          if (response.data.data.msg === "Registration successful") {
            setChoseMethod(!choseMethod);
            setNotificationColor("#38E54D");
            setNotificationText("Registration successful");
            setNotificationStyle(true);
          }
        }
      })
      .catch((err) => {
        setNotificationColor("#FF0000");
        setNotificationText("Register Failed");
        setNotificationStyle(true);
      });
  };

  return (
    <>
      <NotificationMessage
        msg={notificationText}
        color={notificationColor}
        style={notificationStyle}
        toggleNotification={setNotificationStyle}
      />
      <div className="authentication_form_container">
        <div className="choosingPart">
          <div className={choseMethod === true ? "login selected" : "login"}>
            <p onClick={() => setChoseMethod(true)}>Login</p>
          </div>
          <div className={choseMethod === false ? "signUp selected" : "signUp"}>
            <p onClick={() => setChoseMethod(false)}>Register</p>
          </div>
        </div>

        <div className="body">
          <form
            name="loginForm"
            style={
              choseMethod === true ? { display: "block" } : { display: "none" }
            }
          >
            <div className="input">
              <label htmlFor="loginUserName">User Name</label>
              <input
                type="text"
                placeholder="Enter Username"
                id="loginUserName"
                onChange={(e) => setLoginUserName(e.target.value)}
              />
              <p
                style={
                  !loginUserNameError
                    ? {
                        alignSelf: "flex-start",
                        paddingLeft: 0,
                        paddingTop: "2px",
                        color: "red",
                        display: "none",
                      }
                    : {
                        alignSelf: "flex-start",
                        paddingLeft: 0,
                        paddingTop: "2px",
                        color: "red",
                        display: "flex",
                      }
                }
              >
                User Name required
              </p>
            </div>

            <div className="input">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Enter Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <p
                style={
                  !loginPasswordError
                    ? {
                        alignSelf: "flex-start",
                        paddingLeft: 0,
                        paddingTop: "2px",
                        color: "red",
                        display: "none",
                      }
                    : {
                        alignSelf: "flex-start",
                        paddingLeft: 0,
                        paddingTop: "2px",
                        color: "red",
                        display: "flex",
                      }
                }
              >
                Password required
              </p>
            </div>

            <button onClick={pressLogin}>Login</button>
            <br /> <br />
            <p style={{ padding: 0 }}>
              If you are not registered yet,{" "}
              <span onClick={() => setChoseMethod(false)}>Register</span>
            </p>
          </form>

          {/* register */}
          <form
            name="signUpForm"
            style={
              choseMethod === false ? { display: "block" } : { display: "none" }
            }
          >
            <div className="firstAndLastName">
              <div className="input">
                <label htmlFor="signUpFirstName">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="signUpFirstName"
                  onChange={(e) => setFName(e.target.value)}
                />
                <span
                  className="error_message"
                  style={fNameError ? { display: "flex" } : { display: "none" }}
                >
                  First Name Required
                </span>
              </div>

              <div className="input">
                <label htmlFor="signUpLastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  id="signUpLastName"
                  onChange={(e) => setLName(e.target.value)}
                />
                <span
                  className="error_message"
                  style={lNameError ? { display: "flex" } : { display: "none" }}
                >
                  Last Name Required
                </span>
              </div>
            </div>

            <div className="input">
              <label htmlFor="signUpUseName">User Name</label>
              <input
                type="text"
                placeholder="Enter User Name"
                id="signUpUseName"
                onChange={(e) => setUsername(e.target.value)}
              />
              <span
                className="error_message"
                style={
                  usernameError ? { display: "flex" } : { display: "none" }
                }
              >
                {userNameErrorText}
              </span>
            </div>

            <div className="input">
              <label htmlFor="signUpMobile">Mobile Number</label>
              <input
                type="mobile"
                placeholder="Enter Mobile Number"
                id="signUpMobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <span
                className="error_message"
                style={mobileError ? { display: "flex" } : { display: "none" }}
              >
                Mobile Number Required
              </span>
            </div>

            <div className="input">
              <label htmlFor="email1">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="error_message"
                style={emailError ? { display: "flex" } : { display: "none" }}
              >
                {emailErrorText}
              </span>
            </div>

            <div className="input">
              <label htmlFor="signUpAddress1">Address Line One</label>
              <input
                type="Address"
                placeholder="Enter Address Line One"
                id="signUpAddress1"
                onChange={(e) => setAddress1(e.target.value)}
              />
              <span
                className="error_message"
                style={address1Error ? { display: "flex" } : { display: "none" }}
              >
                Address Line One Required
              </span>
            </div>
            
            <div className="input">
              <label htmlFor="city">District</label>
              <select type="Address" placeholder="Enter Your City" id="city" onChange={(e) => setCityID(e.target.value)}>
                <option value="" style={{display:'none'}}>Select Your District</option>
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
              <span
                className="error_message"
                style={cityError ? { display: "flex" } : { display: "none" }}
              >
                District Required
              </span>
            </div>
            
            
            
            

            <div className="input">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" onChange={handleImageInputChange} />
              <span
                className="error_message"
                style={imageError ? { display: "flex" } : { display: "none" }}
              >
                Image Required
              </span>
            </div>

            <div className="passwordAndRePassword">
              <div className="input">
                <label htmlFor="firstPassword">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="firstPassword"
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <span
                  className="error_message"
                  style={
                    password1Error ? { display: "flex" } : { display: "none" }
                  }
                >
                  {PasswordErrorText}
                </span>
              </div>

              <div className="input">
                <label htmlFor="secondPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="secondPassword"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <span
                  className="error_message"
                  style={
                    password2Error ? { display: "flex" } : { display: "none" }
                  }
                >
                  {confirmPasswordErrorText}
                </span>
              </div>
            </div>

            <div style={{ padding: "5px" }}>
              <input
                type="checkbox"
                id="check-box"
                onChange={() => setCheckBox(!checkbox)}
              />{" "}
              <label
                htmlFor="check-box"
                style={
                  checkboxError
                    ? { color: "red", fontSize: "15px", fontWeight: "500" }
                    : { color: "#000", fontSize: "15px", fontWeight: "500" }
                }
              >
                I agreed with all terms & conditions
              </label>
            </div>

            <button onClick={pressRegister}>Register</button>

            <p>
              If you have an account,{" "}
              <span onClick={() => setChoseMethod(true)}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
