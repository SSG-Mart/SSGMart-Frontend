import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Become.scss";
import axios from "axios";

function Select(props) {

  // Submit for
  const [form, setFormData] = useState();
  const [name, setStoreName] = useState("");
  const [StoreNameError, setStoreNameError] = useState(
    "Store Name Already Exist"
  );
  const [displayStoreNameError, setDisplayStoreNameError] = useState(false);

  const [IDNumber, setIDNumber] = useState("");
  const [IDError, setIDError] = useState("ID Number Already Exist");
  const [displayIDError, setDisplayIDError] = useState(false);
  
  const [mainCategory, setMainCategory] = useState("");

  useEffect(() => {
    axios
      .post("/api/become/validate_store_name", { store_name: name })
      .then((res) => {
        // console.log(res.data);
        if (res.data === "exist") {
          setStoreNameError("Store name already exist");
          setDisplayStoreNameError(true);
        } else if (res.data === "not exist") {
          setDisplayStoreNameError(false);
        } else {
          console.log(res.data);
        }
      });
  }, [name]);

  useEffect(() => {
    axios.post("/api/become/validate_nic", { NIC: IDNumber }).then((res) => {
      if (res.data === "exist") {
        setIDError("Store name already exist");
        setDisplayIDError(true);
      } else if (res.data === "not exist") {
        setDisplayIDError(false);
      } else {
        console.log(res.data);
      }
    });
  }, [IDNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (displayStoreNameError === true || displayIDError === true) {
      return false;
    }
    setFormData({
      store_name: e.nativeEvent.target[0].value,
      nic: e.nativeEvent.target[1].value,
      mainCategory: mainCategory,
    });
    submitImage(e.nativeEvent.target[2].files[0]);
  };

  const submitImage = (image) => {
    // console.log(image);
    var imageForm = new FormData();
    imageForm.append("image", image);
    axios
      .post("/api/imgupload/nic", imageForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log("image submit response", res);
        if (res.data !== "error") {
          console.log("image upload success");
          submitForm(res.data);
        } else {
          console.log("image upload failed");
        }
      });
  };

  const submitForm = (image) => {
    // console.log("image", image);
    let data = {
      STORE_NAME: form.store_name,
      // M_ID: "M001", from backend
      C_ID: mainCategory,
      NIC: form.nic,
      NIC_image: image,
    };

    axios.post("/api/become", data).then((res) => {
      if (res.data === "success") {
        props.trigger(new Date());
        props.hiddenBecomeASeller();
      }
    });
  };

  useEffect(() => {
    console.log(mainCategory);
  }, [mainCategory]);

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
            <AiOutlineClose
              color="white"
              size={14}
              onClick={() => props.hiddenBecomeASeller()}
            />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setStoreName(e.target.value)}
            />
            <p
              style={
                displayStoreNameError
                  ? { position: "absolute", color: "red" }
                  : { display: "none" }
              }
            >
              {StoreNameError}
            </p>
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
                onChange={(e) => setIDNumber(e.target.value)}
              />
              <p
                style={
                  displayIDError
                    ? { position: "absolute", color: "red" }
                    : { display: "none" }
                }
              >
                {IDError}
              </p>
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
              <select required defaultValue="" onChange={e => setMainCategory(e.target.value)}>
                <option value="" disable="true" hidden>
                  -Select-
                </option>
                <option value="1">SOLID ITEM</option>
                <option value="2">FOOD ITEM</option>
              </select>
            </div>
          </div>
          <div className="submit">
            <input type="submit" value="Submit" className="box" id="submit" />
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
