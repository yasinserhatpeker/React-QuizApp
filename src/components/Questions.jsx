import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import QUESTIONS from "../questions"; 

export default function Questions({onSelect,selectedAnswer,onSkip}) {
const [answer,setAnswer]=useState({
    selectedAnswer:'',
    isCorrect:null
})

function handleSelectAnswer(answer) {
    setAnswer({
        selectedAnswer:answer,
        isCorrect:null
    })
    setTimeout(()=>{
     setAnswer({
        selectedAnswer:answer,
        isCorrect:QUESTIONS[key].answers[0] === answer
     })
    },1000)
}
let answerState='';
if(selectedAnswer.answer) {
    answerState=answer.isCorrect ? 'correct' : 'wrong';
}
    return (
        <div id="question">
        <QuestionTimer 
        timeout={10000}  
        onTimeout={onSkip}/>
        <h2>{QUESTIONS[key].text}</h2>
         <Answer 
         selectedAnswer={selectedAnswer} 
         answerState={answerState} 
         answers={QUESTIONS[key].answers} 
         onSelect={handleSelectAnswer}/>
    </div>
    )
}