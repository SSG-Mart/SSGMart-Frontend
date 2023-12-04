import React, { useEffect, useState } from "react";
import UserLoading from "../../assets/loading/user loading/user_loading001.gif";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { PORT } from "../../util";

const CardThirdSec = (props) => {
  let [moreDates, setMoreDates] = useState(0);
  const [item_name, setItemName] = useState([]);
  const [item_description, setDescription] = useState([]);
  const [like, setLike] = useState(null);

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
  
  useEffect(() => {
    const getLike = async () => {
      try{
        var res = await axios.get("/api/seller/like/"+api_data.item_id);
        if (res.data) {
          console.log("Like Data", res.data);
          if(res.data === "login first"){
            setLike(null)
          }
          else{
            setLike(res.data.like)
          }
        }
        else{
          console.log(res);
        }
      }
      catch(err){
        console.log(err);
      }

    }
    getLike()
  }, [like]);

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


  const clickLike = async (item_id) => {
    if(like){
      // Delete from wish-list
      try{
        var res = await axios.delete("/api/seller/like/"+item_id);
        if (res.data) {
          console.log("Like Data", res.data);
          setLike(res.data.like)
        }
        else{
          console.log(res);
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      // add to wish-list
      try{
        var res2 = await axios.post("/api/seller/like/"+item_id);
        if (res2.data) {
          console.log("Like Data", res2.data);
          setLike(res2.data.like)
        }
        else{
          console.log(res2);
        }
      }
      catch(err){
        console.log(err);
      }
    }

    if(props.setRefresh){
      props.setRefresh(prv=>!prv)
    }
  }

  if(api_data && typeof(like) !== 'undefined') return (
    <>
      <div
        className="card"
      >
        <div className="item_image" style={{overflow: 'hidden', height: 650}}>
        {typeof(like) !== 'undefined' && like !== null && <FaHeart className="like-heart" color={like ? 'red' : null} onClick={() => clickLike(api_data.item_id)} />}
          {api_data.image ? (
            <img
              src={`http://localhost:${PORT}/api/img/item/${api_data.image}`}
              alt="sampleImage"
              onClick={() => displayPopup(api_data, api_user_data)}
            />
          ) : (
            <img src={UserLoading} alt="loading_image" onClick={() => displayPopup(api_data, api_user_data)} />
          )}
        </div>

        <div className="seller_info" onClick={() => displayPopup(api_data, api_user_data)}>
          <div className="image" >
            {/* <img src={require(`../../../../ssg_mart-backend/img/user/${api_user_data.image}`)} alt="userProfile" /> */}
            {api_user_data.image ? (
              <img
                src={`http://localhost:${PORT}/api/img/user/${api_user_data.image}`}
                alt="user"
              />
            ) : (
              <img src={UserLoading} alt="loading_image" />
            )}
          </div>

          <div className="information">
            <p className="name">{api_user_data.store_name}</p>
            {api_user_data.verify_seller === 1 ? (
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

        <div className="description" onClick={() => displayPopup(api_data, api_user_data)}>
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

        <div className="bottom" onClick={() => displayPopup(api_data, api_user_data)}>
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
