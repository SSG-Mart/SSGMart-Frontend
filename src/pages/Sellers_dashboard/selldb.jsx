import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "../../components/addItem/addItem";
import Itempopup from "../../components/popup-item/popup-i";
import DiscountPopup from "./components/discount_popup";
import "./selldb.scss";
import Logo from "./ssg_mart.png";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Row from "./components/Row";

function Selldb(props) {
  const navigate = useNavigate();

  const [toggleAddItem, setToggleAddItem] = useState(false);
  const [data, setData] = useState();
  const [trigger, setTrigger] = useState(false);
  const [popUpData, setPopUpData] = useState([]);
  const [preview, setPreview] = useState(false);
  


  useEffect(() => {
    // axios async call
    async function fetchData() {
      var res = await axios.post("/api/dashboard");
      // if(res.data.error.type !== "error"){
      //   setData(res.data);
      // }
      // else navigate('/')
      // console.log("DATA : ",res.data.error.type);

      //
      if(typeof(res.data.error) === 'undefined'){
        if(typeof(res.data) === 'string') navigate('/')
        else setData(res.data);
      }else{
        navigate('/')
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [trigger]);

  //popup preview
  function clickClose() {
    setPreview(false)
  }
  function showPreview(e) {
    console.log(e);
    setPopUpData(e)
    setPreview(true)
  }

  //discount pop-up
  const [discountPopup, setDiscountPopup] = useState(false);
  const [DiscountItemId, setDiscountItemId] = useState(null);
  const [discountPrice, setDiscountPrice] = useState();
  function clickDiscount(e, x) {
    setDiscountItemId(e);
    setDiscountPrice(x)
    console.log(x);
    // setTrigger(!trigger)
    setDiscountPopup(true);
  }
  
  function clickDiscountClose() {
    setTrigger(!trigger)
    setDiscountPopup(false);
  }

  

  return (
    <>

    <div style={discountPopup ? null : {display: 'none'}}>
      <DiscountPopup clickDiscountClose={clickDiscountClose} itemID={DiscountItemId} discountPrice={discountPrice} trigger={setTrigger} triggerValue={trigger}  />
    </div>

    <div style={preview ? null : {display:'none'}}> {/** preview popup */}
      <Itempopup popUpData = {popUpData} clickClose={clickClose} />
    </div>
      <div
        className="add_item"
        style={toggleAddItem ? null : { display: "none" }}
      >
        <AddItem toggleAdd={setToggleAddItem} />
      </div>
      <div className="main_seldb">
        <div className="names">
          <div className="header-section">
            <div className="names">
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <h1>SSG Mart</h1>
          </div>
        </div>

        <div className="main-body-section">
          <div className="plus">
            <FaPlus
              className="Plus_Button"
              onClick={() => setToggleAddItem(true)}
            />
          </div>
          <div className="dashbord-card">
            <div className="header-section">
              <div className="table-hrader">
                <div className="headre-data">
                  <span className="Topic_No">ID</span>
                  <span className="Topic_Image">Image</span>
                  <span className="Topic_Discription">Description</span>
                  <span className="Topic_ABC">ABC</span>
                </div>
              </div>
            </div>

            <div className="body-section">
              {
                typeof(data) === 'undefined' ? null :
                // eslint-disable-next-line
                data.map((item, index) => {
                  if(new Date(item.expire_date) > new Date())
                    return <Row key={index} item={item} trigger={setTrigger} triggerValue={trigger} showPreview={showPreview} clickDiscount={clickDiscount} />
                })
              }


              {/* 
              Item Image
              Item Discription
              add discount API
              remove Item API
              edit Item API
              preview API
              */}
            </div>
            {/* body-section */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Selldb;
