import { useState } from "react"
import QUESTIONS from "../questions";

export default function Quiz() {
const [questionAnswers,setQuestionAnswers]=useState([]);

const activeQuestionIndex=questionAnswers.length;
const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);

 function handleSelect(selectedAnswer) {
    setQuestionAnswers((prevUserAnswers)=>{
       return [...prevUserAnswers,selectedAnswer];
    });
 }
  return ( 
    <div id="quiz">
        <div id="question">
         <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
         <ul id="answers">
            {shuffledAnswers.map((answer)=> ( 
                 <li key={answer} className="answer">
                    <button onClick={()=>handleSelect(answer)}>{answer}</button>
                 </li>
            ))}
         </ul>
    </div>
    </div>

    )
}