import React from 'react'
import "./index.scss"

const Card = ({title,number,icon}) => {
  return (
    <div className='appCard bg-white shadow-md py-6 px-6'>
        <img src={icon} alt="Icon"/>
        <p className='pt-4 pb-2'>{title}</p>
        <h3>{number}</h3>
    </div>
  )
}

export default Card