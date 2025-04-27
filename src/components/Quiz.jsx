import { useCallback,useState } from "react"
import QUESTIONS from "../questions";
import Questions from "./Questions";
import Summary from "./Summary";

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
       <Summary questionAnswers={questionAnswers}/>

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