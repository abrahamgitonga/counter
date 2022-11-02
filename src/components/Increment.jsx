import React, { useEffect, useState } from 'react'
import useIncDec from '../hooks/useIncDec'

export default function Increment() {

    const retNum= useIncDec(+1)
    
  return (
    <div>Increment:{retNum}</div>
  )
}
