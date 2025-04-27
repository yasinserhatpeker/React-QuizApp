import winningImg from '../assets/quiz-complete.png'
export default function Summary() {
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
            <li>
                <h3>2</h3>
                <p className='question-text'>question text</p>
                <p className='user-answer'>user answer</p>
            </li>
        </ol>
      </div>
    )
}