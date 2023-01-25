import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/ssg_mart.png";
import "./searchBar.scss";

const SearchBar = (props) => {
    const navigate = useNavigate();
  //
  const [response, setResponse] = useState();

  // const [search, setSearch] = useState ("");


  useEffect(() => {
    axios.post("/api/become/alreadySeller").then((res) => {
      if (res.data === "unauthorized user") {
        setResponse("unauthorized");
      } else if (res.data === "exist") {
        setResponse("exist");
      } else if (res.data === "not exist") {
        setResponse("not exist");
      } else {
        console.log(res.data);
      }
    });
  }, [props.trigger]);

  return (
    <div className="searchBar-container">
      <nav>
        <div
          className="logoContainer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>{" "}
          {/* end logo class */}
          <div className="name">
            <p>SSG Mart</p>
          </div>{" "}
          {/* end name class */}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>

        {
            response === "unauthorized" ? (
                <>
                    <input className="Become-a-seller" type="button" value="Become a seller" onClick={() => navigate('/auth')} />
                </>
            )
            : response === "exist" ? (
                <>
                    <input className="Seller-Dashboard" type="button" value="Dashboard" onClick={() => navigate('/seller/dashboard')} />
                </>
            ):
            (
                // not exist
                <>
                    <input className="Become-a-seller" type="button" value="Become a seller" onClick={() => props.popUpBecomeASeller()} />
                </>
            )

        }
          


          <form action="/" method="get" className="form">
            <input
              className="search"
              type="text"
              id="search"
              placeholder="Search...."
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </form>{" "}
          {/* end search class */}
          {/* <div>
            <button className="search-btn" onClick={()=> props.setSearch(search) }>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
