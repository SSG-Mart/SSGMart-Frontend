import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './seller_view.scss'
import SecTwo from './sec_two'
import SecThree from './sec_three'


export default function Seller_view() {
    const { store_name } = useParams()
    if(typeof(store_name) != 'undefined') console.log(store_name);

    //
    useEffect(() => {
      const getData = async () => {
        try {
          var res = await axios.post("/api/seller",{store_name:store_name});
          if (res.data) {
            console.log(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    },[store_name])
  return (
    <div className='seller_view_container'>
        <div className="firs_sec">
            
        </div>

        <div className="second_sec">
            <SecTwo />
        </div>

        <div className="third_sec">
            <SecThree />
        </div>
    </div>
  )
}
