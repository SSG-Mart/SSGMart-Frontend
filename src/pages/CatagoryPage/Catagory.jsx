import React, { useEffect, useState } from 'react';
import './catagoryHome.scss';
import Filter from './filterSection/Filter';
import potato from './Catagory-imaeg/potato.png';

export default function Catagory() {
  const [radioValue, setRadioValue] = useState(0)
  const [verify, setVerify] = useState(false)
  const [range, setRange] = useState(0)

  const [max,] = useState(300)

  useEffect(() => {
    console.log(radioValue);
    console.log(verify);
    console.log(range);
  },
    [radioValue, verify, range]
  )

  return (
    <div className='catagoryHome-container'>

      <div className='left'>
        {/* <Nav /> */}
      </div>

      <div className='right'>

        <div className='banner'><p>Vagitable</p></div>

        <div className='filter-section'>
          <div className='filter-container'>
            <div className='radio-btn'>


              <label><input type="radio" name="radio" onClick={() => setRadioValue("range")} /> Select Your Price Range</label>
              <input type="range" min="0" max={max} stop="1" style={radioValue === 'range' ? { display: 'block' } : { display: 'none' }} defaultValue='0' onChange={e => setRange(e.target.value)} />
              <p style={radioValue === 'range' ? { display: 'block' } : { display: 'none' }}>{range}</p>

              <label><input type="radio" name="radio" value="Best-match" onClick={() => setRadioValue("best_match")} />  Best Match </label>
              <label><input type="radio" name="radio" value="Ending-soon" onClick={() => setRadioValue("ending_soon")} /> Ending Soon </label>
            </div>

            <div className='check-box'>
              <label><input type="checkbox" value={verify} onChange={() => setVerify(!verify)} /> Verified sellers</label>
            </div>
          </div>
        </div>

        <div className='item-body'>

          <div className='card'>
            {/* You can add more item cards. */}

            <div className="card-frame">
              <div className="img1">
                <img src={potato} alt="itemImage" />
              </div>
              <p className="shop-name">Tharindu Nilan</p>
              <p className="item-name">Potato</p>
              <p className="price">Rs.400.00</p>
              <button>See Details</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
