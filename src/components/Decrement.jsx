import React ,{ useEffect, useState }from 'react'
import useIncDec from '../hooks/useIncDec'
export default function Decrement() {
    // const [num , setNum]=useState(0)
    // useEffect(()=>{
    //     let val = setInterval(()=>{
    //         setNum(num-1)
    //     },1000)
    //     return()=>{
    //         clearInterval(val)
    //     }
    // },[num])
    const retNum= useIncDec(-1)
  return (
    <div>Decrement:{retNum}</div>
  )
}
