import { useState } from "react"
import QUESTIONS from "../questions";

export default function Quiz() {
const [questionAnswers,setQuestionAnswers]=useState([]);

 function handleSelect(selectedAnswer) {
    setQuestionAnswers((prevAnswers)=>{
       return [...prevAnswers,selectedAnswer];
    });
 }
  const activeQuestionIndex=questionAnswers.length;

    return <div id="question">
         <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
         <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer)=> {
                 <li key={answer} className="answers">
                    <button onClick={()=>handleSelect(answer)}>{answer}</button>
                 </li>
            })}
         </ul>
    </div>
}