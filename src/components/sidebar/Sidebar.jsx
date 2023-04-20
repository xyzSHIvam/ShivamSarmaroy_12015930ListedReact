import React from 'react'
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PunchClockOutlinedIcon from '@mui/icons-material/PunchClockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="box">
        <div className="top">
        <span className='logo'>Board.</span>
        </div>
        
       <div className="center">
         <ul>
          <li className='Dashboard'>
            
              <DashboardIcon/>
            
            <span>Dashboard</span>
            </li>
          <li>
            <SellOutlinedIcon />
            <span>Transaction</span>
            </li>
          <li>
            <PunchClockOutlinedIcon/>
            <span>Schedules</span>
            </li>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
            </li>
          <li>
            <SettingsOutlinedIcon />
            <span> Settings
            </span>
          </li>
         </ul>
       </div>

       <div className="bottom">
        <span>Help</span>
        <span>Contact Us</span>
       </div>
      </div>
    </div>
  )
}

export default Sidebar
