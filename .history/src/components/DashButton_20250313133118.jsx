import React, { useState } from 'react'

const DashButton = () => {
  const handleChange = () => {
    setisToggled(!isToggled);
  }
   
  return (
      <button className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
