import React from 'react'
import { useSelector } from "react-redux"

function Card() {

  let data = useSelector(state => state.customers.customers);

  return (
    <div className='cards'>
      <div className="img">
        {
          data.map((el,index) => {
            console.log(el);
            return (
              <img src={el} key={index} alt="" />
            )
          })
        }
      </div>
    </div>
  )
}

export default Card