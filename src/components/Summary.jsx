import winningImg from '../assets/quiz-complete.png'
import QUESTIONS from "../questions";
export default function Summary({questionAnswers}) {
    return (
        <div id="summary">
        <h2>QUIZ IS COMPLETED!</h2>
        <img src={winningImg} alt="Trophy icon" />
        <div id='summary-stats'>
            <p>
                <span className='number'>%10</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>%10</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>%10</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>
        <ol>  
          {questionAnswers.map((answer,index)=> {
            return (
            <li key={answer}>
                <h3>{index + 1}</h3>
                <p className='question-text'>{QUESTIONS[index].text}</p>
                <p className='user-answer'>{answer ?? 'skipped'}</p>
            </li>
              )

          })}
        </ol>
      </div>
    )
}