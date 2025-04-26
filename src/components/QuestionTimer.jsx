import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
 const [remainingTime,setRemainingTime]=useState(timeout)


  useEffect(()=> {
    console.log("SETTING TIMER")
      setTimeout(onTimeout,timeout);

  },[onTimeout,timeout])


  useEffect(()=> {
      console.log("SETTING INTERVAL");
      setInterval(()=> {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
      },100)
},[]);

 return (
     <progress max={timeout} value={remainingTime} id="question-time"/>
  )
}