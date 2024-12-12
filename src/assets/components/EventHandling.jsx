// import { useState } from "react"
  function EventHandling(){

const EventHandling2 = () => {
    alert("Hey I am clicked!!")
}
const handleMouseOver=()=>{
    alert ("Hey I am a mouse Over")
}

  return (
    <>
    <div className="button">
        <button onClick={EventHandling2}>Click me</button>
    </div>
    <div className="red" onMouseOver={handleMouseOver}>
        I am a red Dev
    </div>
    </>
  )


  }
export default EventHandling