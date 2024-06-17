import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function ButtonVertical({path,title}) {
  return (
    <Link to={path} className='btn-vrtcl'>{title}</Link>
  )
}

export default ButtonVertical