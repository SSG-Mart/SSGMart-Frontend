import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import "./addItem.scss";

export default function AddItem(props) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  // const [radio, setRadio] = useState();
  const [expireDate, setExpireDate] = useState(1);


  const [error, setError] = useState(false);

  //Main Category and sub category
  const [main_api_category, main_set_api_category] = useState("");
  const [sub_api_category, sub_set_api_category] = useState();

  useEffect(() => {
    const getCategory = async () => {
      try {
        var res = await axios.post("/api/additem/getcategory");
        main_set_api_category(res.data[0].name);
        console.log(main_api_category);
        
        sub_set_api_category(res.data[1].list_of_sub_category);
      } catch (err) {
        console.log(err);
      }
    };

    getCategory();
    // eslint-disable-next-line
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title.length === 0 ||
      quantity.length === 0 ||
      unit.length === 0 ||
      subcategory.length === 0 ||
      unitPrice.length === 0 ||
      image.length ||
      expireDate.length
    ) {
      setError(true);
    }
    if (
      title &&
      quantity &&
      unit &&
      subcategory &&
      unitPrice &&
      description &&
      image
    ) {
      // console.log(title,quantity,radio,subcategory,unitPrice,description,expireDate,image,catagory)

      submitImage()
      
    }
  };


  function submitImage(){
    var imageForm = new FormData();
    imageForm.append("image", image);
    axios.post('/api/imgupload', imageForm, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((result) => {
      // setMassage(result.data.msg);
      // console.log(result.data);
      if(result.data !== "error"){
        submitForm(result.data)
      }
    });
  }

  async function submitForm(x){
    const userdata = {
      title: title,
      quantity: quantity,
      sub_category_id: subcategory,
      unit_price: unitPrice,
      description: description,
      time_period: expireDate,
      image: x,
      category_id: "1",
      unit: unit,
    };
    console.log(userdata);
    await axios
      .post("/api/additem", { userdata })

      .then((result) => {
        // setMassage(result.data.msg);
        console.log(result.data);
      });
  }

  const toggleAddItem = () => {
    props.toggleAdd(false);
  }

  return (
    <div className="addItem-container">
      <div className="addItem-card">
        {/* close button */}
        <div className="close-btn">
          <AiFillCloseCircle size={30} color="red" onClick={toggleAddItem} />
        </div>

        {/* Title of the card */}
        <div className="card-title">
          <h2>Add Items</h2>
        </div>

        {/* Main Table */}
        <div className="table-decision">
          <form onSubmit={handleSubmit}>
            <table border={0}>
              <tbody>
                <tr>
                  <td>
                    <div className="title">
                      <p>Title</p>
                      <input
                        type="text"
                        placeholder="Enter Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <br />
                      {error && title.length <= 0 ? (
                        <label>The title can't be empty</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td>
                    <div
                      className="unit"
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <p>Unit</p>
                      <label className="radio">
                        <input
                          type="radio"
                          name="radio"
                          value="Kilogram"
                          
                        />
                        Kilogram
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          name="radio"
                          value="Liter"
                          
                        />
                        Liter
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          name="radio"
                          value="Pieces"
                          
                        />
                        Pieces
                      </label>
                      <br />
                      {error && unit.length <= 0 ? <label>required</label> : ""}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="category">
                      <p>category</p>
                      <select
                        name="category"
                        id="category"
                        disabled
                      >
                        <option id="1">
                          {main_api_category}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="Sub-category">
                      <p>Sub category</p>
                      <select
                        name="sub-category"
                        id="category"
                        onChange={(e) => setSubcategory(e.target.value)}
                      >
                        <option value="1" id="1" style={{visibility: 'hidden'}}>Select Sub Category</option>
                        {typeof sub_api_category !== "undefined"
                          ? sub_api_category.map((item, key) => {
                              return (
                                <option key={key} value={item.id} >
                                  {item.name}
                                </option>
                              );
                            })
                          : null}
                      </select>
                      <br />
                      {error && subcategory.length <= 0 ? (
                        <label>The sub category must be select</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="quantity">
                      <p>Quantity</p>
                      <input
                        type="number"
                        placeholder="Enter Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <br />
                      {error && quantity.length <= 0 ? (
                        <label>The quantity can't be empty</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="unit-price">
                      <p>Unit Price</p>
                      <input
                        className="unit-input"
                        type="text"
                        placeholder="Enter unit price"
                        onChange={(e) => setUnitPrice(e.target.value)}
                      />
                      <br />
                      {error && unitPrice.length <= 0 ? (
                        <label>The unit price cant't be empty</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="add-img">
                      <p>Add Image</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <br />
                      {error && image.length <= 0 ? (
                        <label>The image must be upload</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="expire-date">
                      <p>Time Periad</p>
                      <input
                        type="number"
                        value={expireDate}
                        placeholder="Enter Expire Date"
                        min={1}
                        onChange={(e) => setExpireDate(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Description">
                      <p>Description</p>
                      <textarea
                        type="text"
                        rows="4"
                        cols="26"
                        placeholder="Enter Your Description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <br />
                      {error && description.length <= 0 ? (
                        <label>The description can't be empty</label>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="submit">
                      <input type="submit" name="submit" value="List Item" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
