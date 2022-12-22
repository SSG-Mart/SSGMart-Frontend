import React, { useEffect, useState } from "react";
import User from "../../assets/user.png";

const CardThirdSec = (props) => {
  let [moreDates, setMoreDates] = useState(0);
  const [item_name, setItemName] = useState([]);
  const [item_description, setDescription] = useState([]);

  const api_data = props.apiData;
  const api_user_data = props.userData;

  const [dates, setDates] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMoreDates(api_data.moreTime);
  }, []);
  var timer;
  useEffect(() => {
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
  }, [api_data.name, api_data.description]);

  return (
    <>
      <div className="card">
        <div className="item_image">
          <img
            src={require("../../assets/authentication/authentication_background.jpg")}
            alt="sampleImage"
          />
        </div>

        <div className="seller_info">
          <div className="image">
            <img src={User} alt="userProfile" />
          </div>

          <div className="information">
            <p className="name">{api_user_data.store_name}</p>
            <p className="ratings">
              <i className="fa-solid fa-star"></i> 4/5
            </p>
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
