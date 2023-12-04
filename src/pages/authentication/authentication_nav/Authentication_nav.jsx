import React from 'react';
import { Link } from 'react-router-dom';
import './authentication_nav.scss';
import Logo from '../../../assets/ssg_mart.png'


export default function Authentication_nav() {
  return (
    <div className='authentication_nav_main'>
        <nav>
          <div className="log">
          <img src={Logo} alt="logo" />
          </div> {/* end logo class */}

          <div className="name">
            <p>SSG Mart</p>
          </div> {/* end name class */}

          <div className="links">
            <Link to="/about" className="about">About</Link>
            <Link to="/contact" className="contact">Contact</Link>
          </div> {/* end links class */}
        </nav>
    </div>
  )
}
