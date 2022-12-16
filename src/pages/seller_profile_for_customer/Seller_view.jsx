import React from 'react'
// import { useParams } from 'react-router-dom'
import './seller_view.scss'
import SecTwo from './sec_two'
import SecThree from './sec_three'


export default function Seller_view() {
    // const { id } = useParams()
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
