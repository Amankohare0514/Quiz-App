import React from "react";
import questions from "./QuizData";
import "./QuizResult.css"
function QuizResult(props){
     return(
          <div>   
          <div className="score-section">
               <div className="certificate">
                  <img src="https://www.kindpng.com/picc/m/591-5913797_ribbon-certificate-logo-png-transparent-png.png"  alt="Loading...." />
                  <h3 className="kohare">REACT QUIZ</h3>
                  <h2>For successfully completed  REACT quize and HE/SHE is score- </h2>
                 <h1>totle score {props.score}/100</h1>
                 <h2> Correct Question  {props.correctAns} out of {questions.length}</h2>
                 </div> 
                 <br/>
                 <br/>
                 <br/>
                 <div className="score-button">
                 <button onClick={props.handlePlayAgain}>Re-Take</button>
                 </div>
             <br/>
          </div>
          </div>
     );
}
export default QuizResult;