import React from 'react'
import "./Data.scss"
import PieChartt from '../Pie/PieChartt'
const Data1 = (props) => {
{
  
     return (
      <div className='container2'>
      <div className='pie'>
        <span className='pietitle'>
          Top products
        </span>
          <PieChartt className="pigraph"/>  
      </div>
      <div className='details'> 
          <div className='detailDate'>
             <span>May-June 2021</span> 
          </div>
          <div className='detailContent'>
              <div className='color'>
                  <div className='color1'></div>
              </div>
              <div className='Text'>
              <span className='Main'>
                Basic Tree
              </span>
              <span className='prec'>
                51%
              </span>
              </div>
          </div>
          <div className='detailContent'>
              <div className='color'>
                  <div className='color2'></div>
              </div>
              <div className='Text'>
              <span className='Main'>
              Custom Short Pants
              </span>
              <span className='prec'>
                31%
              </span>
              </div>
          </div>
          <div className='detailContent'>
              <div className='color'>
                  <div className='color3'></div>
              </div>
              <div className='Text'>
              <span className='Main'>
              Super Hoodie
              </span>
              <span className='prec'>
                14%
              </span>
              </div>
          </div>
      </div>
      </div>
        )
}
}

export default Data1
