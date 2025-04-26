import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
 const [remainingTime,setRemainingTime]=useState(timeout)


  useEffect(()=> {
      setTimeout(onTimeout,timeout);

  },[onTimeout,timeout])


  useEffect(()=> {
      setInterval(()=> {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
      },100)
},[]);

 return (
     <progress max={timeout} value={remainingTime} id="question-time"/>
  )
}