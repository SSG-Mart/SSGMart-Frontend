import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404.scss'
import Gif from '../../assets/404.gif'


const NotFound = () => {
const navigate = useNavigate();
    return (
        <div className='notFound'>
            <div className="center">
                <div className="img">
                    <img src={Gif} alt="404" />
                </div>
                <div className="text">
                    <code><span>404</span> - Page Not Found</code>
                    <button
                        onClick={() => navigate('/')}
                    >HOME</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
