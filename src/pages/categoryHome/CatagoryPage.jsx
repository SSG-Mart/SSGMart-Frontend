import React from 'react'
import Sidebar from '../navBar/Nav'
import Filetr from './filterSection/filter'
import './CatagoryPage.scss'
import tomato from '../home/Home-image/potato.png'
import orange from '../home/Home-image/Orange.png'

export default function CatagoryPage() {
  return (
    <div className='catagory-container'>

      <div className='left'>
        <Sidebar />
      </div>

      <div className='right'>

          <div className='banner'> 
            <h1>Item Catagory</h1> 
          </div>

          <div className='filter'>
            <Filetr/>
          </div>

        <div className='item-section'>

          <div className='item-list'>

            <div className='card-fram'>
              <div className='img1'>
                <img src={tomato} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Tomato (250g)</p>
              <p className='price'>Rs 300.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={orange} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Orange (500g)</p>
              <p className='price'>Rs 400.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={tomato} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Tomato (250g)</p>
              <p className='price'>Rs 300.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={orange} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Orange (500g)</p>
              <p className='price'>Rs 400.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={tomato} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Tomato (250g)</p>
              <p className='price'>Rs 300.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={orange} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Orange (500g)</p>
              <p className='price'>Rs 400.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={tomato} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Tomato (250g)</p>
              <p className='price'>Rs 300.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={orange} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Orange (500g)</p>
              <p className='price'>Rs 400.00 </p>
              <button>See Details</button>
            </div>
            <div className='card-fram'>
              <div className='img1'>
                <img src={orange} alt="itemImage" />
              </div>
              <p className='item-name'>Shop mame</p>
              <p className='item-name'>Orange (250g)</p>
              <p className='price'>Rs 400.00 </p>
              <button>See Details</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
