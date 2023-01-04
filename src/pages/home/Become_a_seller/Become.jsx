import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Become.scss";

function Select() {
  //popup
  // const [popup, setPop] = useState(false);
  // const handleClickOpen = () => {
  //   setPop(!popup);
  // };
  // const closePopup = () => {
  //   setPop(false);
  // };

  //Item list
  const category = ["Solid Item", "Food Item"];
  const type = {
    "Solid Item": [
      "Wood Craft",
      "Iron Craft",
      "Brass Craft",
      "Clay Craft",
    ],
    "Food Item": ["Vegetables", "Fruits", "Cooked food", "Drinks"],
  };

  const [selectedState, setSelectedState] = useState("");
  console.log(selectedState);

  return (
    // <div className="main">
    //   <h1 className="Click" onClick={handleClickOpen}>
    //     Become a Seller
    //   </h1>
    //   <div>
    //     {popup ? (
          <div className="B_container">
            <div className="popup">
              <div className="head">
                <h1 className="topic">Let's Become a Seller</h1>
                <button className="close" /*onClick={closePopup}*/>
                  <AiOutlineClose color="white" size={14} />
                </button>
              </div>
              <form>
                <div className="store_name">
                  <label className="lable">
                    Store Name <sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="SSC Mart"
                    className="box"
                    required
                  />
                  <br />
                </div>

                <div className="NICclass">
                  <div className="NIC">
                    <label htmlFor="" className="lable">
                      NIC <sup>*</sup>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="*********V"
                      className="box"
                      required
                    />
                  </div>

                  <div className="NICI">
                    <label className="lable">
                      NIC Image <sup>*</sup>
                    </label>{" "}
                    <br />
                    <input type="file" className="box" required />
                  </div>
                </div>

                <div className="Items">
                  <div className="category">
                    <label className="lable">
                      Item Category <sup>*</sup>
                    </label>{" "}
                    <br />
                    <select required
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                      }}
                    >
                      <option value="" disable selected hidden>-Select-</option>
                      {category.map((setcategory) => {
                        return <option>{setcategory}</option>;
                      })}
                    </select>
                  </div>
                  <div className="type">
                    <label className="lable">
                      Item Type <sup>*</sup>
                    </label>{" "}
                    <br />
                    {selectedState && (
                      <select required>
                        <option value="" disable selected hidden>-Select-</option>
                        {type[selectedState].map((settype) => {
                          return <option>{settype}</option>;
                        })}
                      </select>
                    )}
                  </div>
                </div>
                <div className="submit">
                  <input
                    type="submit"
                    value="Submit"
                    className="box"
                    id="submit"
                  />
                </div>
              </form>
            </div>
          </div>
    //     ) : (
    //       ""
    //     )}
    //   </div>
    // </div>
  );
}

export default Select;
