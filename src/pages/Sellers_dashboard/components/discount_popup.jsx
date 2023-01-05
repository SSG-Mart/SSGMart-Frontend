import React, { useState, useEffect } from "react";
import axios from "axios";

const DiscountPopup = (props) => {
  const [discount, setDiscount] = useState(props.discountPrice);

  useEffect(() => {
    setDiscount(props.discountPrice);
  }, [props.discountPrice]);

  async function addDiscount() {
    var res = await axios.post("/api/dashboard/discount", {
      itemID: props.itemID,
      discountPrice: discount,
    });
    console.log(res.data);
    props.trigger(!props.triggerValue);
    props.clickDiscountClose();
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "1000",
        fontFamily: "arial",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{ padding: "10px", fontSize: "25px", paddingBottom: "20px" }}
        >
          Add Discount
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>ID</label>
          <input
            type="text"
            disabled
            style={{ minWidth: "220px", padding: "7px", marginBottom: 10 }}
            defaultValue={props.itemID}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Discount (Rs.)</label>
          <input
            type="number"
            style={{ minWidth: "220px", padding: "7px", marginBottom: 20 }}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: 10,
          }}
        >
          <button
            style={{
              width: 100,
              borderRadius: 7,
              cursor: "pointer",
              padding: 10,
              margin: 3,
              border: "none",
              color: "#fff",
              background: "green",
            }}
            onClick={addDiscount}
          >
            Add Discount
          </button>
          <button
            style={{
              width: 100,
              borderRadius: 7,
              cursor: "pointer",
              padding: 10,
              margin: 3,
              border: "none",
              color: "#fff",
              background: "blue",
            }}
            onClick={() => props.clickDiscountClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
