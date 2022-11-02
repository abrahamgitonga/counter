import React, { useEffect, useState } from 'react'

function useIncDec(param) {

    const [num , setNum]=useState(0)
    useEffect(()=>{
        let val = setInterval(()=>{
            setNum(num+param)
        },1000)
        return()=>{
            clearInterval(val)
        }
    },[num, param])

  return num
}

export default useIncDec