import winningImg from '../assets/quiz-complete.png'
import QUESTIONS from "../questions";
export default function Summary({questionAnswers}) {
const skippedAnswers=questionAnswers.filter((answer) => answer===null);
const correctedAnswers=questionAnswers.filter((answer,index)=> answer === QUESTIONS[index].answers[0]);

const skippedAnswersShare= Math.round((skippedAnswers.length / questionAnswers.length)*100);
const correctedAnswersShare=Math.round((correctedAnswers.length / questionAnswers.length)*100);
const wrongAnswersShare= 100 - skippedAnswersShare - correctedAnswersShare;


    return (
        <div id="summary">
        <h2>QUIZ IS COMPLETED!</h2>
        <img src={winningImg} alt="Trophy icon" />
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedAnswersShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctedAnswersShare}%</span>
                <span className='text'>Answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnswersShare}%</span>
                <span className='text'>Answered incorrectly</span>
            </p>
        </div>
        <ol>  
          {questionAnswers.map((answer,index)=> {
            let cssClass='user-answer';
            if(answer === null) {
                cssClass += ' skipped';
            }
            else if(answer === QUESTIONS[index].answers[0]) {
                cssClass += ' correct';
            }
            else {
                cssClass += ' wrong';
            }
            return (
            
            <li key={answer}>
                <h3>{index + 1}</h3>
                <p className='question-text'>{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
              )

          })}
        </ol>
      </div>
    )
}