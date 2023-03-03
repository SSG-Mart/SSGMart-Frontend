import {useNavigate} from "react-router-dom"
import "./about.scss";
import { FaHome } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";

function Head() {
  const navigate = useNavigate();
  return (
    <div className="page_container">
      <div className="aftermain">
        <div className="head">
          <button onClick={() => navigate('/')}>
            <FaHome />
            Home
          </button>
          <hr />
          <button onClick={() => navigate('/contact')}>
            <BsPhone />
            Contact
          </button>
        </div>
        <div className="card">
          <div className="head">
            <h2>ABOUT</h2>
            <h1>US</h1>
          </div>
          <div className="blackcard">
            <p>
              We are team SATU started at 2022. We have four team member and
              they are,<br />
               B.V.G.S.S.Gunawardhana - All rounder and our group
              leader <br />
               H.M.U.C.Bandara - Another all rounder in our group
              <br /> N.T.N.Padhmasiri - Front-End developer <br />
               A.A.K.C.Amarasinghe -
              Front-End developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
