
export default function Questions({answerState,onSelectAnswer,questionText,answers,selectedAnswer}) {
    return (
        <div id="question">
        <QuestionTimer timeout={10000} onTimeout={handleSkip} key={activeQuestionIndex}/>
         <h2>{questionText}</h2>
         <Answer selectedAnswer={selectedAnswer} answerState={answerState} answers={answers} onSelect={onSelectAnswer} key={activeQuestionIndex}/>
    </div>
    )
}