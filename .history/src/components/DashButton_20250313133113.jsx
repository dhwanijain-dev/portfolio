import React, { useState } from 'react'

const DashButton = () => {
  const handleChange = () => {
    setisToggled(!is)
  }
   
  return (
      <button className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
