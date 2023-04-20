import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="logo">Dashboard</div>
        <div className='left'>
          <input type="text"  placeholder="Search" />
          <SearchIcon className='searchIcon'/>
          <NotificationsNoneOutlinedIcon />
          <img className="profilePhoto" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
