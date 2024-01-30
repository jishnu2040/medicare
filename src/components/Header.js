import React from "react";
import './Header.css'

function Header (props) {
console.log("render Header");
// onMenuSelect function 
    const {
      onMenuSelect
    } = props;
    return(
    <div className='app-header'>
      <span className='header-title'> Medicare </span>
      <span  onClick={() => {
        onMenuSelect('home')
      }}>Home</span>

      <span onClick={() => {
        onMenuSelect('usage')
      }}>Usage</span>

      <span onClick={() => {
        onMenuSelect('logout')
      }}>Logout</span>
  </div>
    );
}

export default Header