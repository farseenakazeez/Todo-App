import React, { useEffect, useState } from 'react';

function Sample() {
  const [show , setShow] = useState(true)
  useEffect(()=>{
    console.log("Component re rendered");
  },[example]);
  const [example ,setExample ] = useState(true)

    
  return (
    <>
    { show && <h1>Hello</h1>}
    <button onClick = {()=>setShow(!show)}>{show ? "Hide": "show"}</button>
    <button onClick={()=>setExample(!example)}>CLICK ME</button>
    
    </>
   
  
  );
}

export default Sample
