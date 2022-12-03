import React from 'react';
import AuthenticationNav from './authentication_nav/Authentication_nav';
import SlideShow from './slide_show/SlideShow';
import Form from './forms/Form';
import './authentication.scss';
import Authentication_nav from './authentication_nav/Authentication_nav';

export default function Authentication() {
  return (
    <>

        <AuthenticationNav />

    <Authentication_nav />

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
