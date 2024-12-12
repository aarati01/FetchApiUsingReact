import { useState } from "react"

// import { useState } from "react"
  function EventHandling(){
    const [name,setname]=useState("aarati");

const EventHandling2 = () => {
    alert("Hey I am clicked!!")
}
const handleMouseOver=()=>{
    alert ("Hey I am a mouse Over")
}
const handleChnage=(e)=>{
  setname(e.target.value)
}

  return (
    <>
    <div className="button">
        <button onClick={EventHandling2}>Click me</button>
    </div>
    <div className="red" onMouseOver={handleMouseOver}>
        I am a red Dev
    </div>
    <input type="text" value={name} onChange={handleChnage}/>
    </>
  )


}
export default EventHandling