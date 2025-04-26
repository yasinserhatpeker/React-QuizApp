import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import QUESTIONS from "../questions"; 


export default function Questions({onSelectAnswer,onSkip,index}) {
const [answer,setAnswer]=useState({
    selectedAnswer:'',
    isCorrect:null
})

function handleSelectAnswer(answer) {
    setAnswer({
        selectedAnswer:answer,
        isCorrect:null
    })
    setTimeout(() => {
     setAnswer({
        selectedAnswer:answer,
        isCorrect:QUESTIONS[index].answers[0] === answer
     })
     setTimeout(()=> {
       onSelectAnswer(answer);
     },2000)
    },1000)
}
let answerState='';
if(answer.selectedAnswer && answer.isCorrect !==null) {
    answerState=answer.isCorrect ? 'correct' : 'wrong';
}
 else if(answer.selectedAnswer) {
    answerState='answered';
}
    return (
        <div id="question">
        <QuestionTimer 
        timeout={10000}  
        onTimeout={onSkip}/>
        <h2>{QUESTIONS[index].text}</h2>
         <Answer 
         selectedAnswer={answer.selectedAnswer} 
         answerState={answerState} 
         answers={QUESTIONS[index].answers} 
         onSelect={handleSelectAnswer}/>
    </div>
    )
}