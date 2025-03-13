import React, { useState } from 'react'

const DashButton = () => {
  const handleChange = () => {
    setisToggled(!)
  }
   
  return (
      <button className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
