export default function Answer({questionAnswers,isSelected,answerState}) {
  return (
    <ul id="answers">
            {shuffledAnswers.current.map((answer)=>{ 
            const isSelected= questionAnswers[questionAnswers.length-1] ===answer;
              let cssClasses ='';
              if(answerState==='answered' && isSelected) {
                cssClasses+='selected';
              }
              if((answerState==='correct' || answerState==='wrong') && isSelected) {
                cssClasses=answerState;
              }
            
            return <li key={answer} className="answer">
                <button onClick={()=>handleSelect(answer)} className={cssClasses}>{answer}</button>

            </li>
            }
                
            
           )}
         </ul>
  )
}