import React from 'react'
import "./styles.css"

function Button(props) {

  const { name, onClick } = props

  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button