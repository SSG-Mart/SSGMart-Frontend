import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "../../components/addItem/addItem";
import Itempopup from "../../components/popup-item/popup-i";
import "./selldb.scss";
import Logo from "./ssg_mart.png";
import { FaPlus } from "react-icons/fa";

import Row from "./components/Row";

function Selldb() {
  const [toggleAddItem, setToggleAddItem] = useState(false);
  const [data, setData] = useState();
  const [trigger, setTrigger] = useState();
  const [popUpData, setPopUpData] = useState([]);
  const [preview, setPreview] = useState(false);


  useEffect(() => {
    // axios async call
    async function fetchData() {
      var res = await axios.post("/api/dashboard");
      setData(res.data);
    }
    fetchData();
    console.log(data);
    // eslint-disable-next-line
  }, [trigger]);

  //close popup preview
  function clickClose() {
    setPreview(false)
  }
  function showPreview(e) {
    console.log(e);
    setPopUpData(e)
    setPreview(true)
  }

  return (
    <>
    <div style={preview ? null : {display:'none'}}>
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
                  <span className="Topic_Discription">Discription</span>
                  <span className="Topic_ABC">ABC</span>
                </div>
              </div>
            </div>

            <div className="body-section">
              {
                typeof(data) === 'undefined' ? null :
                data.map((item, index) => {
                  return <Row key={index} item={item} trigger={setTrigger} triggerValue={trigger} showPreview={showPreview} />
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
