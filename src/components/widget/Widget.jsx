import React from 'react'
import "./Widge.scss"
import { Icon } from '@mui/material';
const Widget = (props) => {
  console.log(props);
  return (
    <div className="widget" style={{backgroundColor:props.e.color}}>
      <div className='left'>
        <div className="container">
          <span className='title'>
            Title {props.e.name}
        </span>
        <span className='number'>
            {props.e.number}
        </span>
        </div>
      </div>
      <div className='right'>
        <Icon>{props.e.Icon}</Icon>
      </div>
    </div>
  )
}

export default Widget
