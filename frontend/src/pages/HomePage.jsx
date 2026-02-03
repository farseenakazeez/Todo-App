import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

function homepage() {
    const Navigate = useNavigate()
    const btnHandler = ()=>{
        Navigate('/about')
    }
  return (
    <div>
      <Link to ={'/about'}>AboutPage</Link>
      <button onClick ={()=>btnHandler()}>click me</button>
    </div>
  )
}


export default homepage
