import { useEffect } from "react"

const App = () => {
  const[cards,setCards]=useState([])

  const fetchData=async()=>{
    let a =await fetch("https://jsonplaceholder.typicode.com/posts")
    let data =await a.json()
    console.log(data)
  }
  useEffect(()=>{
    fetchData()

  },[])
  return (
    <>
    <div className="container">
      <div className="card"></div>
    </div>
     </>
  )
}

export default App