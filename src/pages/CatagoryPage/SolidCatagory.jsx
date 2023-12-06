import React, { useEffect, useState } from 'react';
import './catagoryHome.scss';
import './filter.scss';
import axios from 'axios';

export default function SolidCatagory() {
  const [itemData, setItemData] = useState([]);

  const [radioValue, setRadioValue] = useState("range")
  const [verify, setVerify] = useState(false)
  const [range, setRange] = useState(0)

  const [max, setMax] = useState(0)


  useEffect(() => {
    axios.get("/api/category/item/1")
      .then(res => {
        if (res.data !== "No data found") {
          setItemData(res.data)
          console.log(res.data);
        }
        else console.log("No data found");
      }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const getMax = async() => {
      try{
        const res = await axios.get("/api/category/max/1")
        setMax(res.data["max(unit_price)"])
        setRange(res.data["max(unit_price)"])
      }
      catch(err) {
        throw err
      }
    }

    getMax()
  }, [])

  return (
    <div className='catagoryHome-container'>

      <div className='left'>
        {/* <Nav /> */}
      </div>

      <div className='right'>

        <div className='banner'><p><b>SOLID</b></p></div>

        <div className='filter-section'>
          <div className='filter-container'>
            <div className='radio-btn'>


              <label><input type="radio" name="radio" checked={true} onClick={() => setRadioValue("range")} /> Select Your Price Range</label>
              <input type="range" min="0" max={max} stop="1" style={radioValue === 'range' ? { display: 'block' } : { display: 'none' }} defaultValue={max} onChange={e => setRange(e.target.value)} />
              <p style={radioValue === 'range' ? { display: 'block' } : { display: 'none' }}>{range}</p>

              {/* <label><input type="radio" name="radio" value="Best-match" onClick={() => setRadioValue("best_match")} />  Best Match </label>
              <label><input type="radio" name="radio" value="Ending-soon" onClick={() => setRadioValue("ending_soon")} /> Ending Soon </label> */}
            </div>

            <div className='check-box'>
              <label><input type="checkbox" value={verify} onChange={() => setVerify(!verify)} /> Verified sellers only</label>
            </div>
          </div>
        </div>

        <div className='item-body'>

          <div className='card'>
            {/* You can add more item cards. */}

            {
              itemData.map((data, key) => {
                if(verify){
                  if(range >= data.unit_price && radioValue === "range" && data.seller_verification === 1) {
                    return (
                      <div className="card-frame" key={key}>
                        <div className="img1">
                          <img src={`api/img/item/${data.image}`} alt="itemImage" />
                        </div>
                        <p className="shop-name">{data.store_name}</p>
                        <p className="item-name">{data.name}</p>
                        <p className="price">{data.unit_price}</p>
                        <button onClick={() => true}>See Details</button>
                      </div>
                    )
                  }
                }
                else{
                  if(range >= data.unit_price && radioValue === "range") {
                    return (
                      <div className="card-frame" key={key}>
                        <div className="img1">
                          <img src={`api/img/item/${data.image}`} alt="itemImage" />
                        </div>
                        <p className="shop-name">{data.store_name}</p>
                        <p className="item-name">{data.name}</p>
                        <p className="price">{data.unit_price}</p>
                        <button onClick={() => true}>See Details</button>
                      </div>
                    )
                  }
                }
                
                // else if(radioValue === "ending_soon"){
                //   return (
                //     <div className="card-frame" key={key}>
                //       <div className="img1">
                //         <img src={`api/img/item/${data.image}`} alt="itemImage" />
                //       </div>
                //       <p className="shop-name">{data.store_name}</p>
                //       <p className="item-name">{data.name}</p>
                //       <p className="price">{data.unit_price}</p>
                //       <button onClick={() => true}>See Details</button>
                //     </div>
                //   )
                // }
                
                return true
              })
            }

          </div>

        </div>
      </div>
    </div>
  )
}
