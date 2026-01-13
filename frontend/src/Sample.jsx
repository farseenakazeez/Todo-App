import React from 'react'
import './sample.css'

function Sample( {userName,age,isLogin}) {

    
  return (
    <div>
    
    <h1 className ={ isLogin ? 'head ':  'nonUser'}>  my name is {userName} </h1>
    <h2 style ={{color : isLogin? "purple" : "orange"}}> my age is {age}</h2>
   
    {isLogin ?  <p>Login success</p> :  <p>please login</p>}
    <p> {isLogin ? "welcome" : "logout"}</p>
    </div>
  )
}

export default Sample
