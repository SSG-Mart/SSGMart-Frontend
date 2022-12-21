import React, {useEffect, useState} from "react";
import User from "../../assets/user.png";

const CardThirdSec = (props) => {
  const [item_name, setItemName] = useState([]);
  const [item_description, setDescription] = useState([]);
  const api_data = props.apiData;
  const api_user_data = props.userData;
  console.log(api_data);


  useEffect(() => {
    setItemName((api_data.name.slice(0, 22)));
    setDescription((api_data.description.slice(0, 55)));
  }, [api_data.name, api_data.description])
  

  return (
    <>
      <div className="card">
        <div className="item_image">
          <img src={require('../../assets/authentication/authentication_background.jpg')} alt="sampleImage" />
        </div>

        <div className="seller_info">
          <div className="image">
            <img src={User} alt="userProfile" />
          </div>

          <div className="information">
            {/* <p className="name">{item_name.length >= 30 ? item_name+"..." : item_name}</p> */}
            <p className="name">{api_user_data.store_name}</p>
            <p className="ratings">
              <i className="fa-solid fa-star"></i> 4/5
            </p>
          </div>
        </div>

        <div className="description">
          <p className="title">{item_name.length >= 23 ? item_name+"..." : item_name}</p>
          <p className="phrase">
          {item_description}{item_description.length >= 55 ? <span>...More</span> : null}
          </p>
          <p className="ending">Ending in: 24h 28 min 04s</p>
        </div>

        <hr />

        <div className="bottom">
          <div className="chat"></div>
          <div className="price">
            RS.{api_data.unit_price} 
            {/* <span>{api_data.unit}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThirdSec;
