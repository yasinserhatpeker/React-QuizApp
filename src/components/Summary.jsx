import winningImg from '../assets/quiz-completed.png'
export default function Summary() {
    return (
        <div id="summary">
        <h2>QUIZ IS COMPLETED!</h2>
        <img src={winningImg} alt="Trophy icon" />
      </div>
    )
}