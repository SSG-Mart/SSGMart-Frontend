import React from "react";
import "./edit.scss";

const Edit = (props) => {
  return (
    <div className="edit_dashboard">
      <div className="mainCard">
        <div className="mainTitle">
          <h1>Update Items</h1>
        </div>

        <div className="inputs">
          <div className="oneSec">
            <div className="lineLeft">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" />
            </div>

            <div className="lineLeft">
              <label>Sub Category</label>
              <select name="sub_category" id="sub_category">
                <option value="ONe">One</option>
              </select>
            </div>
            <div className="lineLeft">
              <label>Quantity</label>
              <input type="number" placeholder="Enter Quantity" />
            </div>
          </div>

          <div className="twoSec">
            <div className="lineRight">
              <label>Unit</label>
              <select name="unit" id="unit">
                <option value="ONe">One</option>
              </select>
            </div>

            <div className="lineRight">
              <label>Unit Price</label>
              <input type="number" placeholder="Enter Unit Price" />
            </div>
            
            <div className="lineRight">
              <label>Description</label>
              <textarea name="description" id="description" placeholder="Enter Description" ></textarea>
            </div>
          </div>
        </div>

        <div className="btn">
          <button className="update">Update</button>
          <button className="cancel" onClick={props.hiddenEdit()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
