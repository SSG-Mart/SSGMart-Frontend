import React from "react";
import CardThirdSec from "./card_third_sec";
import Loading from '../../assets/loading/loading.gif'


const SecThree = (props) => {
  const api_data = props.apiData;
  console.log(api_data);
  return (
    <>
      <h1 className="main_title">{props.user_data.store_name}'s Items</h1>

      {
        api_data === null ? (
          <div style={{height:'100%', width: '100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={Loading} alt="loading_gif" style={{width: '10vw'}} />
          </div>
        ):
        api_data.length !== 0 ?(
          <div className="card_container">
              {
                api_data.map((item, index) => {
                  return(
                    <CardThirdSec key={index} apiData={item} userData={props.user_data} togglePopUp = {props.togglePopUp} />
                  )
                })
              }
          </div>
        ):(
          <div style={{display:'flex', alignItems:'center', justifyContent: 'center', marginTop: '35vh'}}>
            <p
            style={{
              fontFamily:'arial',
              textTransform:'capitalize',
              padding: '20px 50px',
              background: '#FFFAE7',
              fontSize: '25px',
              color: '#383838',
              borderRadius: '10px',
              textAlign: 'center',
            }}
            >{props.user_data.store_name}'s not item added yet</p>
          </div>
        )
      }
    </>
  );
};

export default SecThree;
