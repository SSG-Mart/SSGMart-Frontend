import React from "react";
import "./selldb.scss";
import Imlg from "./ssg_mart.png";
import { FaPlus } from "react-icons/fa";

function selldb() {
  return (
    <div className="main_seldb">
      <div className="names">
        <img className="imlg" src={Imlg} alt="Imgagein" />
        <h1>SSGMart</h1>
      </div>

      <div className="plus">
        <FaPlus className="Plus_Button" />
      </div>
      <div className="back">
        <div className="After_Back">
          <table className="table_one">
            <thead>
              <tr>
                <th className="Topic_No">No</th>
                <th className="Topic_Image">Image</th>
                <th className="Topic_Discription">Discription</th>
                <th className="Topic_ABC">ABC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="Body_tr">
                <td className="Data_No">01</td>
                <td className="Data_Image"></td>
                <td className="Data_Discription">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </td>
                <td className="Data_ABC">
                    <div className="fst_section">
                      <button className="Green">Add Discount</button>
                      <button className="Orange">Preview</button>
                    </div>
                    <div className="snd_section">
                      <button className="Red">Remove Item</button>
                      <button className="Blue">Edit</button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default selldb;
