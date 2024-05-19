import React from 'react'

const Button = () => {
    const msg = (e) =>{
        e.preventDefault();
        console.log("Man is the wepon that women use.");
    }
  return (
    <div>
      <button onClick={msg}></button>
    </div>
  )
}
const msg = 

export default Button 