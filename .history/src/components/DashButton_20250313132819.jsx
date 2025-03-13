import React, { useState } from 'react'

const DashButton = () => {
    const [click,setClick] = useState();
  return (
      <button on className="dashboard--button">
          DashBoard
      </button>
  )
}

export default DashButton
