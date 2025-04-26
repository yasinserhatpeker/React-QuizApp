import { useState } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
 const [remainingTime,setRemainingTime]=useState(timeout)
   



  return (
     <progress max={timeout} value={remainingTime} id="question-time"/>
  )
}