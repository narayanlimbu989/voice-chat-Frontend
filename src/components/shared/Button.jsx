import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Button = ({text,onClick}) => {
  return (
    <div className="button">
      <button onClick={onClick}>{text}<HiOutlineArrowNarrowRight style={{marginLeft:"10px"}}/></button>
    </div>
  )
}

export default Button
