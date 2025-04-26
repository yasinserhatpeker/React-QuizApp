import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../questions";
import winningImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";

export default function Quiz() {

const [questionAnswers,setQuestionAnswers]=useState([]);
const [answerState,setAnswerState]=useState('');

const activeQuestionIndex= answerState === '' ? questionAnswers.length : questionAnswers.length -1;
const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

 
 const handleSelect =useCallback(function handleSelect(selectedAnswer) {
    setAnswerState('answered')
    setQuestionAnswers((prevUserAnswers)=>{
       return [...prevUserAnswers,selectedAnswer];
    });
     setTimeout(()=>{
     if(selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerState('correct');
     }
     else {
        setAnswerState('wrong');
     }

     setTimeout(()=> {
      setAnswerState('');
     },2000)

     },1000)
 },[activeQuestionIndex])

 const handleSkip=useCallback(()=>handleSelect(null),[handleSelect])

 if(isQuizComplete) {
    return (
        <div id="summary">
            <h2>QUIZ IS COMPLETED!</h2>
            <img src={winningImg} alt="Trophy icon" />
        </div>

    )
 }

  return ( 
    <div id="quiz">
        <div id="question">
        <QuestionTimer timeout={10000} onTimeout={handleSkip} key={activeQuestionIndex}/>
         <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
         <Answer selectedAnswer={questionAnswers[questionAnswers.length-1]} answerState={answerState} answers={QUESTIONS[activeQuestionIndex].answers} onSelect={handleSelect} key={activeQuestionIndex}/>
    </div>
    </div>

    )
}