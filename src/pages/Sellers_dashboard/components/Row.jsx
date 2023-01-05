import React, {useState, useEffect} from "react";
// import item_image from "../ss.jpeg";
import axios from "axios";
import Edit from "./Edit";

const Row = (props) => {
  // console.log(props.item);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(props.item.discount)
  },[props.trigger])

  //add discount
  // preview
  function showPreview() {
    const data = {
      item_name: props.item.name,
      description: props.item.description,
      unit_price: props.item.unit_price,
      unit: props.item.unit,
      store_name: props.item.store_name,
      city: props.item.city_name,
      mobile: props.item.mobile,
      item_image: props.item.image,
      user_image: props.item.user_image,
    }
    props.showPreview(data);
  }


  // remove item
  async function removeItem(){
    var res = await axios.post("/api/cruditem/delete", { store_id: props.item.seller_id, item_id: props.item.item_id});
    // setData(res.data);
    console.log(res.data);
    props.trigger(!props.triggerValue)
  }
  
  // edit item
  const [toggle, setToggle] = useState(false);
  
  function display(){
    setToggle(true)
  }
  
  function hidden(){
    setToggle(false)
  }

  return (
    <>
      <div style={toggle ? null :{display: 'none'}}>
        <Edit hidden={hidden} apiData = {props.item} /> 
      </div>
      <div className="detail-body">
        <div className="Data_No">{props.item.item_id}</div>
        <div className="Data_Image">
          <img src={`http://localhost:8080/api/img/item/${props.item.image}`} alt="Item" />
        </div>
        <div className="Data_Discription">
          {props.item.description}
        </div>
        <div className="button-section">
          <div className="fst_section">
            <label className="add-btn" onClick={() => props.clickDiscount(props.item.item_id, discount)}>Add Discount</label>
            <label className="preview-btn" onClick={showPreview}>Preview</label>
          </div>
          <div className="snd_section">
            <label className="Remove-btn" onClick={removeItem}>Remove Item</label>
            <label className="edit-btn" onClick={display}>Edit</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
