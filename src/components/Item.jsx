import React from 'react'
import "./item.css"

export default function Item({info}) {
  return (
    <div className='item'>
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </div>
  )
}
