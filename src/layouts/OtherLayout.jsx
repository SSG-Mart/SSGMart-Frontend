import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../pages/navBar/Nav'

const OtherLayout = () => {
  return (
    <div style={{width: '100vw', height: '100vh', boxSizing: 'border-box', overflowX: 'hidden', overflowY: 'auto'}}>
      <div style={{position: 'absolute', zIndex: 10}}>
        <Nav />
      </div>
      <Outlet />      
    </div>
  )
}

export default OtherLayout