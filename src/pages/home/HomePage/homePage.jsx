import React from 'react'
import './homePage.scss'
import tomato from '../Home-image/potato.png'
import orange from '../Home-image/Orange.png'


export default function homePage() {
  return (
    <div className='home-container'>
        <div className="left"></div>

        <div className="right">
                <div className='item-list'>
                    
                    <button className='card-fram'>
                        <div className='img1'>
                            <img src={tomato} alt="itemImage" />
                        </div>
                        <p className='item-name'>Shop mame</p>
                        <p className='item-name'>Tomato (250kg)</p>
                        <p className='price'>Rs 300.00 </p>
                        <button>See Details</button>
                    </button>
                    <button className='card-fram'>
                        <div className='img1'>
                            <img src={orange} alt="itemImage" />
                        </div>
                        <p className='item-name'>Shop mame</p>
                        <p className='item-name'>Orange (500kg)</p>
                        <p className='price'>Rs 400.00 </p>
                        <button>See Details</button>
                    </button>
                    <button className='card-fram'>
                        <div className='img1'>
                            <img src={tomato} alt="itemImage" />
                        </div>
                        <p className='item-name'>Shop mame</p>
                        <p className='item-name'>Tomato (250kg)</p>
                        <p className='price'>Rs 300.00 </p>
                        <button>See Details</button>
                    </button>
                    <button className='card-fram'>
                        <div className='img1'>
                            <img src={orange} alt="itemImage" />
                        </div>
                        <p className='item-name'>Shop mame</p>
                        <p className='item-name'>Orange (500kg)</p>
                        <p className='price'>Rs 400.00 </p>
                        <button>See Details</button>
                    </button>

                </div>
        </div>
    </div>
  )
}
