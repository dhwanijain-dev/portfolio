import React, { useState } from 'react'

const DashButton = () => {
    
  return (
      <button onClick={()=>setClick(true)} className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
