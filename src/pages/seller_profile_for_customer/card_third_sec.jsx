import React, { useEffect, useState } from "react";
import UserLoading from "../../assets/loading/user loading/user_loading001.gif";

const CardThirdSec = (props) => {
  let [moreDates, setMoreDates] = useState(0);
  const [item_name, setItemName] = useState([]);
  const [item_description, setDescription] = useState([]);

  const api_data = props.apiData;
  const api_user_data = props.userData;
  // console.log(api_user_data);


  const [dates, setDates] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMoreDates(api_data.moreTime);
    // eslint-disable-next-line
  }, []);

  var timer;
  useEffect(() => {
    // eslint-disable-next-line
    timer = setInterval(() => {
      setMoreDates(moreDates - 1000);

      setDates(Math.floor(moreDates / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((moreDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((moreDates % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((moreDates % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    setItemName(api_data.name.slice(0, 22));
    setDescription(api_data.description.slice(0, 55));
    // eslint-disable-next-line
  }, []);

  //pop-up
  const displayPopup = (api_data, api_user_data) => {
    props.togglePopUp([api_data, api_user_data]);
  };

  return (
    <>
      <div
        className="card"
        onClick={() => displayPopup(api_data, api_user_data)}
      >
        <div className="item_image">
          {api_data.image ? (
            <img
              src={`http://localhost:8080/api/img/item/${api_data.image}`}
              alt="sampleImage"
            />
          ) : (
            <img src={UserLoading} alt="loading_image" />
          )}
        </div>

        <div className="seller_info">
          <div className="image">
            {/* <img src={require(`../../../../ssg_mart-backend/img/user/${api_user_data.image}`)} alt="userProfile" /> */}
            {api_user_data.image ? (
              <img
                src={`http://localhost:8080/api/img/user/${api_user_data.image}`}
                alt="user"
              />
            ) : (
              <img src={UserLoading} alt="loading_image" />
            )}
          </div>

          <div className="information">
            <p className="name">{api_user_data.store_name}</p>
            {api_user_data.verify_seller == 1 ? (
              <p className="ratings" style={{color:'green'}}>
              <i className="fa-solid fa-shield-halved"></i> Verify Seller
              </p>
            )
            :
            (
                <p className="ratings" style={{color:'gray'}}>
                <i className="fa-solid fa-circle-exclamation"></i> Seller Not Verify
                </p>
            )}
            
          </div>
        </div>

        <div className="description">
          <p className="title">
            {item_name.length >= 23 ? item_name + "..." : item_name}
          </p>
          <p className="phrase">
            {item_description}
            {item_description.length >= 55 ? <span>...More</span> : null}
          </p>
          <p className="ending">
            Ending in: {`${dates}d ${hours}h ${minutes}m ${seconds}s`}
          </p>
        </div>

        <hr />

        <div className="bottom">
          <div className="city">
            <i className="fa-solid fa-location-dot"></i>
            {api_user_data.city}
          </div>
          <div className="price">
            RS.{api_data.unit_price}
            <span>/ 1{api_data.unit}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThirdSec;
