import React from'react';
import Dropdown from'./Dropdown'
import './App.css';


function Mynavbar()
{
 return (<div className="navbar">
     <a className="home" href="home"> Home</a>
     <a className="service" href="service">Services<Dropdown/></a>
      
      <a className="contact" href="contact"> Contact</a>
</div>
);
 }

export default Mynavbar;
