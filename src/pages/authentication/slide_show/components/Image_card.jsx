import React from "react";

export default function Image_card(props) {
  var img_path = require(`../sample_image/${props.name}.jpg`);
  return (
    <div
      className="mySlide fade"
      style={
        props.clickIndex === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <img src={img_path} alt="slide_show_image" />
      <div className="text"></div>
    </div>
  );
}
