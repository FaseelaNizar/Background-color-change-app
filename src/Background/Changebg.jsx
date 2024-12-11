import React, { useState } from 'react'

function Changebg() {
const [color,setColor]=useState("#40ff00")
  return (
    <>
    <h3 className='head'>Background Color Change</h3>
    <div style={{width:"500px",height:"350px", backgroundColor:color}}></div><br />
    <button className='btn btn1  ms-5' onClick={()=>setColor("yellow")}>Yellow</button>
    <button className='btn btn2  ms-5' onClick={()=>setColor("red")}>Red</button>
    <button className='btn btn3 ms-5' onClick={()=>setColor("blue")}>Blue</button>
    <button className='btn btn4  ms-5' onClick={()=>setColor("brown")}>Brown</button>

    </>
  )
}

export default Changebg