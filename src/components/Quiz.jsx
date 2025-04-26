import { useState } from "react"
import QUESTIONS from "../questions";
import winningImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
const [questionAnswers,setQuestionAnswers]=useState([]);

const activeQuestionIndex=questionAnswers.length;

const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

 function handleSelect(selectedAnswer) {
    setQuestionAnswers((prevUserAnswers)=>{
       return [...prevUserAnswers,selectedAnswer];
    });
 }

 if(isQuizComplete) {
    return (
        <div id="summary">
            <h2>QUIZ IS COMPLETED!</h2>
            <img src={winningImg} alt="Trophy icon" />
        </div>

    )
 }
const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);
  return ( 
    <div id="quiz">
        <div id="question">
        <QuestionTimer timeout={10000} onTimeout={()=>handleSelect(null)}/>
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