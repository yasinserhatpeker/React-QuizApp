import { useState } from "react"
import questions from "../questions";

export default function Quiz() {
const [questionAnswers,setQuestionAnswers]=useState(questions);

      
  const activeQuestionIndex=questionAnswers.length
    return <p>Currently Active Question</p>
}