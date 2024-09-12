import React from 'react';
import './Body.css';
import girl from '../../assets/girljump.jpg';
import Signup from '../Signupform/Signup';
import Otpform from '../otp/Otpform';




function Body({text}) {
  return (
    <div className='maincontainer'>
      <div className="left"> 
        {text==='Signup'?<Signup/>:<Otpform/>}
      </div>
      <div className="right">
      </div>
    </div>);}
    export default Body;