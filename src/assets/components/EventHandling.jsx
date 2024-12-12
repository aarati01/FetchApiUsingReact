import { useState } from "react"

// import { useState } from "react"
  function EventHandling(){
    // const [name,setname]=useState("aarati");
  const [Form, setForm] = useState({});

const EventHandling2 = () => {
    alert("Hey I am clicked!!")
}
// const handleMouseOver=()=>{
//     alert ("Hey I am a mouse Over")
// }
const handleChnage=(e)=>{
  // setName(e.target.value)
  setForm({...Form,[e.target.name]:e.target.value})
  console.log(Form)
}

  return (
    <>
    <div className="button">
        <button onClick={EventHandling2}>Click me</button>
    </div>
    {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red Dev
    </div> */}
    <input type="text" name="email" value={Form.email?Form.email:""} onChange={handleChnage}/>
    <input type="text"  name="phone"value={Form.phone?Form.phone:""} onChange={handleChnage}/>

    </>
  )


}
export default EventHandling