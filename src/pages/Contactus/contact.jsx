
import "./contact.scss";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdHome, MdMail, MdMessage, MdPhone } from "react-icons/md";
import Small from "./1.png";
import Medium from "./2.png";
import Large from "./3.png";
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <div className="bc-contact">
      <div className="background">
        <div className="first">
          <img className="l" src={Large} alt="Backcard" />
          <img className="m" src={Medium} alt="Middlecard" />
          <img className="s" src={Small} alt="frontcard" />
          {/* <button onClick={() => navigate("/")}>
            <FaHome size={16} /> Home
          </button> */}
          <div className="media">
            <button className="facebook">
              <a href="#" target="blank"><FaFacebook size={45} /></a>
            </button>
            <button className="whatsapp">
              <FaWhatsapp size={45} />
            </button>
            <button className="insta">
              <FaInstagram size={45} />
            </button>
          </div>
          <div className="topic">
            <h1>CONTACT US</h1>
          </div>
          <div className="icondetail">
            <ul>
              <li><MdHome /><span> : Pure-X solutions,Minneriya road, Polonnaruwa</span></li>
              <li><MdMail /><span> : purexsolution@gmail.com</span></li>
              <li><MdMessage /><span> : +9478 580 8418</span></li>
              <li><MdPhone /><span> : +9478 580 8418</span></li>
            </ul>
          </div>
        </div>

        <div className="right">
          <Link to='/' className="home"><MdHome /></Link>
          <MdMail className="mail" />
          <MdMessage className="message" />
          <MdPhone className="phone" />
        </div>
      </div>
    </div>
  );
}
