import React, { useEffect} from 'react'
import './intro.scss';
import imgMan from '../../assets/man.png';
import imgDown from '../../assets/down.png';
import {init} from 'ityped'; 

const Intro = () => {


  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={imgMan} alt="man"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Safak Kocaoglu</h1>
          <h3>Freelance <span> Web & Mobile Developer</span></h3>
          <a href="#portfolio">
          <img src={imgDown} alt="down"/>
        </a>
        </div>
      
      </div>
    </div>
  )
}

export default Intro