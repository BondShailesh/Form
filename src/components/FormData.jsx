import React from 'react'
import {useEffect} from "react"
import axios from "axios"
function FormData() {
  useEffect(()=>{
    const data = async ()=>{
   let res = await axios.get("http://localhost:8080/data");
   console.log(res);
    }
    data()
  })
  
  return (
    <div>
      <h1>Man Vs Wild</h1>
    </div>
  )
}

export default FormData
