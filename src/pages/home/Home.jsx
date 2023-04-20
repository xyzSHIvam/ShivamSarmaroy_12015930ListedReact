import React from 'react'
import "./home.scss";
import Navbar from "../../components/navbar/Navbar.jsx"
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from "../../components/widget/Widget"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ApprovalIcon from '@mui/icons-material/Approval';
import Chart from '../../components/chart/Chart';
import Data1 from '../../components/Data1/Data1';
import Data2 from '../../components/Data2/Data2';
const items=[
  {
     id:1,
     Icon:<ApprovalIcon/>,
     color:"#d0edd5",
     name:"Revenue",
     number:"20,0175,646",
    },
    {
      id:2,
      Icon:<SellOutlinedIcon/>,
      color:"#e7d9bf",
      name:"Transactions",
      number:"20,0175,646",
    },
    {
      id:3,
      Icon:<ThumbUpIcon/>,
      color:"#f0d5d5",
      name:"Likes",
      number:"20,0175,646",
    },
    {
      id:4,
      Icon:<PeopleAltOutlinedIcon/>,
      color:"#cfd3ef",
      name:"Users",
      number:"20,0175,646",
},


]

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
            <div className='MainDiv'>
          <Navbar/> 
        <div className='Widgets'>
        {items.map(e=>{
          return <Widget
          key={e.id}
          e={e}
          />
        })}
        </div>
        <Chart/> 
         <div className='data'>
         <Data1/>
         <Data2/>
        </div>  
        
        </div>
      </div>
    </div>
  )
}

export default Home
