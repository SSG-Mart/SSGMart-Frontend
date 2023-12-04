import React, { useEffect, useState } from 'react';
import AuthenticationNav from './authentication_nav/Authentication_nav';
import SlideShow from './slide_show/SlideShow';
import Form from './forms/Form';
import './authentication.scss';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Authentication() {
  const [isAuth, setIsAuth] = useState(404);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        var res = await axios.post("/api/auth/checkAuth");
        if (res.data.userID) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
    // eslint-disable-next-line
  }, []);

  if(isAuth === true) return <Navigate to="/" />
  // console.log(isAuth);

  if(isAuth !== 404) return (
    <>
        <AuthenticationNav />
        <div className='authentication_container'>
            <div className="content">

              <div className="image_slide_show">
                <SlideShow />
              </div>

              <div className="authentication_form">
                <Form />
              </div>

            </div>
        </div>
    </>
  )
}
