import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../questions";
import winningImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import Questions from "./Questions";

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
      <Questions 
      key={activeQuestionIndex}
      answerState={answerState}
      onSelectAnswer={handleSelect}
      questionText={QUESTIONS[activeQuestionIndex].text}
      selectedAnswer={questionAnswers[questionAnswers.length-1]}
      answers={QUESTIONS[activeQuestionIndex].answers}
      onSkip={handleSkip}
      />
    </div>

    )
}