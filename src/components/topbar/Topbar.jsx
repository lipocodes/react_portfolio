import React from 'react'
import './topBar.scss';
import {Person,Mail} from '@material-ui/icons'


const Topbar = () => {
  return (
    <div className='topBar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Genius</a>
          <div className="itemConta">
            <Person/>
            <span>+972 54 4968835</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Topbar