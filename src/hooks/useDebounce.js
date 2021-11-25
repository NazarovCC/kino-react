import React, { useState, useEffect } from 'react';


export default function useDebounce(value, time){
   const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(()=>{
     const handler = setTimeout(()=>{
       setDebouncedValue(value)
     }, time)
     return ()=>{
       clearTimeout(handler)
     }
   },[value])
   return debouncedValue
}