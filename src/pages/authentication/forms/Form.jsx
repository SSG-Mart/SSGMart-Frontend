import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./authentication_form.scss";
import NotificationMessage from "../../../components/notification_message";

export default function Form() {
  const navigation = useNavigate();

  useEffect(() => {
    const checkAuth = async() => {
      try {
          var res = await axios.post('/api/auth/checkAuth');
          if(res.data.userName) {
              navigation("/");
          }
      } catch (err) {
          console.log(err);
      }
      
    }
    checkAuth();
  // eslint-disable-next-line
  },[]);


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
  const [image, setImage] = useState("");
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

    if(loginUserName === "") {
      setLoginUserNameError(true);
      return false;
    }
    else {
      setLoginUserNameError(false);
    }

    if(loginPassword === "") {
      setLoginPasswordError(true);
      return false;
    }
    else {
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
  const [imageError, setImageError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [checkboxError, setCheckBoxError] = useState(false);

  // special error validation
  const [userNameErrorText, setUserNameErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");

  const pressRegister = (e) => {
    e.preventDefault();
    let formData = {
      firstName: fName,
      lastName: lName,
      userName: username,
      mobile: mobile,
      email: email,
      image: image,
      password1: password1,
      password2: password2,
      checkbox: checkbox,
    };

    // form validation

    setTotalError(0); // reset total error

    if (fName === "") {
      setFNameError(true);
      setTotalError(totalError + 1);
    } else {
      setFNameError(false);
    }

    if (fName === "") {
      setLNameError(true);
      setTotalError(totalError + 1);
    } else {
      setLNameError(false);
    }
    if (lName === "") {
      setLNameError(true);
      setTotalError(totalError + 1);
    } else {
      setLNameError(false);
    }

    if (username === "") {
      setUserNameErrorText("Username is required");
      setUsernameError(true);
      setTotalError(totalError + 1);
    } else {
      setUsernameError(false);
    }

    if (mobile === "") {
      setMobileError(true);
      setTotalError(totalError + 1);
    } else {
      setMobileError(false);
    }

    if (email === "") {
      setEmailErrorText("Email is required");
      setEmailError(true);
      setTotalError(totalError + 1);
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailErrorText("Email is not valid");
      setEmailError(true);
      setTotalError(totalError + 1);
    } else {
      setEmailError(false);
    }

    if (image === "") {
      setImageError(true);
      setTotalError(totalError + 1);
    } else {
      setImageError(false);
    }

    if (password1 === "") {
      setPassword1Error(true);
      setTotalError(totalError + 1);
    } else {
      setPassword1Error(false);
    }

    if (password2 === "") {
      setConfirmPasswordErrorText("Confirm password is required");
      setPassword2Error(true);
      setTotalError(totalError + 1);
    } else if (password1 !== password2) {
      setConfirmPasswordErrorText("Password does not match");
      setPassword2Error(true);
      setTotalError(totalError + 1);
    } else {
      setPassword2Error(false);
    }

    if (checkbox === false) {
      setCheckBoxError(true);
      setTotalError(totalError + 1);
    } else {
      setCheckBoxError(false);
    }

    axios
      .post("/api/auth/register", { formData })
      .then((response) => {
        if (response.data.data.msg) {
          if (response.data.data.msg === "User name already exist") {
            setUserNameErrorText("User name already exist");
            setUsernameError(true);
            setTotalError(totalError + 1);
          } else {
            setUsernameError(false);
          }

          if (response.data.data.msg === "Email already exist") {
            setEmailErrorText("Email already exist");
            setEmailError(true);
            setTotalError(totalError + 1);
          } else {
            setEmailError(false);
          }

          if (response.data.data.msg === "Registration successful"){
            setChoseMethod(!choseMethod);
            setNotificationColor("#38E54D")
            setNotificationText("Registration successful")
            setNotificationStyle(true) 
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <NotificationMessage msg={notificationText} color={notificationColor} style={notificationStyle} toggleNotification={setNotificationStyle} />
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
            <p style={!loginUserNameError ? {alignSelf: 'flex-start', paddingLeft: 0, paddingTop: '2px', color: 'red',display: 'none'} : {alignSelf: 'flex-start', paddingLeft: 0, paddingTop: '2px', color: 'red',display: 'flex'}}>User Name required</p>
          </div>

          <div className="input">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              placeholder="Enter Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <p style={!loginPasswordError ? {alignSelf: 'flex-start', paddingLeft: 0, paddingTop: '2px', color: 'red',display: 'none'} : {alignSelf: 'flex-start', paddingLeft: 0, paddingTop: '2px', color: 'red',display: 'flex'}}>Password required</p>
          </div>

          <button onClick={pressLogin}>Login</button>
          <a href="#forget">Forget Password</a>
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
              style={usernameError ? { display: "flex" } : { display: "none" }}
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
            <label htmlFor="signEmail">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="signEmail"
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
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            />
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
                Password Required
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
