import React from 'react'
import './topBar.scss';
import {Person,Mail} from '@material-ui/icons'


const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topBar '+ (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Service.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+972 54 4968835</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Lipocodes@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar