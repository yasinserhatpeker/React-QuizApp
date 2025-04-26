import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../questions";
import winningImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
const shuffledAnswers =useRef();
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
 if(!shuffledAnswers.current) {

     shuffledAnswers.current=[...QUESTIONS[activeQuestionIndex].answers];
     shuffledAnswers.current.sort(() => Math.random() - 0.5);
 }
  return ( 
    <div id="quiz">
        <div id="question">
        <QuestionTimer timeout={10000} onTimeout={handleSkip} key={activeQuestionIndex}/>
         <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
         <ul id="answers">
            {shuffledAnswers.current.map((answer)=>{ 
            const isSelected= questionAnswers[questionAnswers.length-1] ===answer;
              let cssClasses ='';
              if(answerState==='answered' && isSelected) {
                cssClasses+='selected';
              }
              if((answerState==='correct' || answerState==='wrong') && isSelected) {
                cssClasses=answerState;
              }
            
            return <li key={answer} className="answer">
                <button onClick={()=>handleSelect(answer)} className={cssClasses}>{answer}</button>

            </li>
            }
                
            
           )}
         </ul>
    </div>
    </div>

    )
}