import React, { useState } from 'react'


const DashButton = () => {
    const [isToggled, setisToggled] = useState(false);
  const handleChange = () => {
    setisToggled(!isToggled);
  }
   
  return (
      <button onClick={handleChange} className="dashboard--button">
          {i}
      </button>
  )
}

export default DashButton
