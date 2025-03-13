import React, { useState } from 'react'

const DashButton = () => {
  const handleChange = () => {
    setisToggled(!isTo)
  }
   
  return (
      <button className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
