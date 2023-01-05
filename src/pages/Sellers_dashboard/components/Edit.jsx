import React, {useState} from "react";
import axios from "axios";
import "./edit.scss";

const Edit = (props) => {

  const data = props.apiData;

  const [title, setTitle] = useState(data.name);
  const [quantity, setQuantity] = useState(data.quantity);
  const [unit, setUnit] = useState(data.unit);
  const [unitPrice, setUnitPrice] = useState(data.unit_price);
  const [description, setDescription] = useState(data.description);
  

  async function update() {
    let data01 = {
        item_id: data.item_id,
        title: title,
        quantity: quantity,
        unit: unit,
        unitPrice: unitPrice,
        description: description
    }
    var res = await axios.post("/api/dashboard/update", {data01});
    if(res.data === "successfully_updated"){
      props.hidden();
    }
  }
  
  
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
              <input type="text" placeholder="Enter Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* <div className="lineLeft">
              <label>Sub Category</label>
              <select name="sub_category" id="sub_category">
                <option value="ONe">One</option>
              </select>
            </div> */}
            <div className="lineLeft">
              <label>Quantity</label>
              <input type="number" placeholder="Enter Quantity" defaultValue={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div className="lineLeft">
              <label>Unit</label>
              <select name="unit" id="unit" defaultValue={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="Kilogram">Kilogram</option>
                <option value="Liter">Liter</option>
                <option value="Pieces">Pieces</option>
              </select>
            </div>
          </div>

          <div className="twoSec">
            

            <div className="lineRight">
              <label>Unit Price (Rs.)</label>
              <input type="number" placeholder="Enter Unit Price" defaultValue={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
            </div>
            
            <div className="lineRight">
              <label>Description</label>
              <textarea name="description" id="description" placeholder="Enter Description" defaultValue={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
          </div>
        </div>

        <div className="btn">
          <button className="update" type="submit" onClick={update}>Update</button>
          <button className="cancel" onClick={() => props.hidden()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
