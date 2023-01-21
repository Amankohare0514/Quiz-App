import React, { useState } from "react";
import questions from "./QuizData";
import QuizResult from "./QuizResult";
import "./Quiz.css";
function Quiz(){
     const [CurrentQuestion , setCurrentQuesion]=useState(0);
     const [score , setscore]=useState(0);
     const [correctAns , setcorrectAns]=useState(0);
     const [showresult , setshowresult]=useState(false);
     const [clicked , setclicked]=useState(false);

      const handleansoption = (isCorrect) =>{
          if(isCorrect){
               setscore(score+4)
               setcorrectAns(correctAns+1)
          }
          setclicked(true)
      };
     const handleNextOption = () => {
          setclicked(false)
          const Nextoption = CurrentQuestion+1 
          if ( Nextoption<questions.length) {
               setCurrentQuesion(Nextoption);
          } 
          else{
               setshowresult(true)
          }
   
     };
     const handlePlayAgain= ()=>{
          setCurrentQuesion(0);
          setscore(0);
          setcorrectAns(0);
          setshowresult(false)
     }


     return(
          <div>
               {showresult ?
               (<QuizResult score={score}
                     correctAns={correctAns}
                      handlePlayAgain={handlePlayAgain}/>)
               :(
                    <div>
          <div className="app">
               <div className="question-section">
                    <h4>NOTE: Each question obtain 4 marks.</h4>
                    <h2>SCORE:{score}</h2>
                    <div className="question-count ">
                         <span><b>Q.No {CurrentQuestion+1} out of {questions.length}</b></span>
                    </div>
                    <div className="question-text">
                        Q- {questions[CurrentQuestion].questionsText}
                    </div>
               </div>
               <div className="answer-section">
                    {questions[CurrentQuestion].answerOption.map((ans,i)=>{
                  return (
                  <button 
                  className={`button ${ clicked && ans.isCorrect? "correct":"button"}`}
                  disabled={clicked}
                  onClick={()=>handleansoption(ans.isCorrect)} key={i}>{ans.answerText}</button>
                  )
                    })}
                    <div className="actions">
                    <button disabled={!clicked} onClick={handleNextOption}>next</button>
               </div>
               </div>
               </div>
               </div>)}
   
               </div>
          
     )
}
export default Quiz;