import  img from '../assets/quiz-logo.png'
export default function Header() {
    return (
        <header>
         <h1>QuizApp</h1>
          <img src={img} alt="main-quiz-logo"/>
        </header>
    )
}