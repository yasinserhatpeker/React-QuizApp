import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../questions";
import winningImg from '../assets/quiz-complete.png';
import Questions from "./Questions";

export default function Quiz() {

const [questionAnswers,setQuestionAnswers]=useState([]);


const activeQuestionIndex = questionAnswers.length;
const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

 
 const handleSelect =useCallback(function handleSelect(selectedAnswer) {
    
    setQuestionAnswers((prevUserAnswers)=>{
       return [...prevUserAnswers,selectedAnswer];
    });
    
 },[])

 const handleSkip=useCallback(()=>handleSelect(null),[handleSelect])

 if(isQuizComplete) {
    return (
       

    )
 }

  return ( 
    <div id="quiz">
      <Questions 
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelect}
      onSkip={handleSkip}
      />
    </div>

    )
}