import React from 'react'
import './homePage.scss'
import itemImage from '../Home-image/potato.png'

export default function homePage() {
  return (
    <div className='home-container'>
        <div className="left"></div>

        <div className="right">
                <div className='item-list'>

                    <div className='img2'>
                        <img src={itemImage} alt="itemImage" />
                        <h1>Potato</h1>
                    </div>
                    <div className='img2'>
                        <img src={itemImage} alt="itemImage" />
                        <h1>Potato</h1>
                    </div>
                    <div className='img2'>
                        <img src={itemImage} alt="itemImage" />
                        <h1>Potato</h1>
                    </div>
                    <div className='img2'>
                        <img src={itemImage} alt="itemImage" />
                        <h1>Potato</h1>
                    </div>

            </div>
        </div>
    </div>
  )
}
