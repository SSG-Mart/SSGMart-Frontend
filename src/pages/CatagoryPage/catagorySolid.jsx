import React, { useState, useEffect } from 'react';
// import './catagorySolid.scss';
import Filter from './filterSection/filter';
// import potato from './Catagory-imaeg/potato.png';
import Nav from '../navBar/Nav';
import axios from 'axios';

export default function TestFile(props) {
  const [itemData, setItemData] = useState([]);
  const [arr, setArr] = useState()

  useEffect(() => {
    axios.get("/api/category/item/1")
      .then(res => {
        if (res.data !== "No data found") {
          setItemData(res.data)
        }
        else console.log("No data found");
      }).catch(err => console.log(err))
  }, [])

  // const data = [{ id: 1, name: 'tharindu', age: 21, address: 'polonnaruwa' },
  // { id: 2, name: 'sanduni', age: 30, address: 'kurunagala' },
  // { id: 3, name: 'jayantha', age: 45, address: 'ampara' },
  // { id: 4, name: 'dinuka', age: 67, address: 'rathnapura' },
  // { id: 5, name: 'saman', age: 50, address: 'kandy' },
  // { id: 6, name: 'nirasha', age: 89, address: 'galle' },
  // { id: 7, name: 'shani', age: 34, address: 'matara' },
  // { id: 8, name: 'priyanka', age: 28, address: 'colombo' },
  // { id: 9, name: 'lalitha', age: 45, address: 'hambantota' },
  // { id: 10, name: 'chinthaka', age: 34, address: 'trincomalee' },
  // { id: 11, name: 'chinthaka', age: 34, address: 'trincomalee' },
  // ];

  useEffect(() => {
    // eslint-disable-next-line
    let arr = itemData.map((data, key) => {
      return (
        <div className="card-frame" key={key}>
          <div className="img1">
            <img src={`api/img/item/${data.image}`} alt="itemImage" />
          </div>
          <p className="shop-name">{data.store_name}</p>
          <p className="item-name">{data.name}</p>
          <p className="price">{data.unit_price}</p>
          <button onClick={() => props.setPopUpData(data)}>See Details</button>
        </div>
      )
    })

    setArr(arr)
  }, [itemData])

  return (
    <div className='catagoryHome-container'>

      <div className='left'>
        <Nav />
      </div>

      <div className='right'>

        <div className='banner'><p>Solid</p></div>

        <div className='filter-section'> <Filter /> </div>

        <div className='item-body'>

          <div className='card'>
            {/* You can add more item cards. */}

            {arr}

          </div>

        </div>
      </div>
    </div>
  )
}
