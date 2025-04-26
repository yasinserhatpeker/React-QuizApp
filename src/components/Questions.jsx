import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";

export default function Questions({answerState,onSelectAnswer,questionText,answers,selectedAnswer,onSkip}) {
    return (
        <div id="question">
        <QuestionTimer 
        timeout={10000} 
        onTimeout={onSkip}/>
        <h2>{questionText}</h2>
         <Answer 
         selectedAnswer={selectedAnswer} 
         answerState={answerState} 
         answers={answers} 
         onSelect={onSelectAnswer}/>
    </div>
    )
}