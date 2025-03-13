import React, { useState } from 'react'


const DashButton = () => {
    const [isToggled, setisToggled] = useState(false);
  const handleChange = () => {
    setisToggled(!isToggled);
  }
   
  return (
    <div>
    <div className={`dashboard ${isToggled ? "dashboard--open" : ""}`}>
        
    </div>
    
      <button onClick={handleChange} className="dashboard--button">
          {isToggled ? "Close" : "Open"}
      </button>
    </div>
  )
}

export default DashButton
