import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout,mode}) {
 const [remainingTime,setRemainingTime]=useState(timeout)


  useEffect(()=> {
   const timer = setTimeout(onTimeout,timeout);
     return () => {
        clearTimeout(timer);
    }
  },[onTimeout,timeout])


  useEffect(()=> {
     const interval = setInterval(()=> {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
      },100)

      return () => {
        clearInterval(interval)
      }
},[]);

 return (
     <progress max={timeout} value={remainingTime} id="question-time" className={mode}/>
  )
}