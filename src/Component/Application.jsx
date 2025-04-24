import React from 'react'
import images from "../assets/images.png"

function Application() {
  return (
    <div className=" flex items-center justify-center bg-white">
      <div>
      <img src={images} alt="" />
      </div>
    </div>
  )
}

export default Application

