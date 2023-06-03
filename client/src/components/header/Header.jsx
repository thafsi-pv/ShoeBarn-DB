import React from 'react'
import './header.css'
import avatar from '../../assets/avatar.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <div className='header-container'>
            <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
            <div className='search'><input type="text" name="" placeholder='Search item' id="" /></div>
            <div><img className='avatar' src={avatar} alt="avatar" /></div>
        </div>
    </div>
  )
}
export default Header