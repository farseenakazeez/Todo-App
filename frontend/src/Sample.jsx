import React from 'react'
import './sample.css'

function Sample( {userName,age}) {
  let isLogin = false
    
  return (
    <div>
    
    <h1 className ={ isLogin ? 'head ':  'nonUser'}>  my name is {userName} and my age is {age}</h1>
    </div>
  )
}

export default Sample
