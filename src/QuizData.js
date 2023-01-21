// our questions here
const questions = [
     {
          questionsText : "Which of the following is used in React.js to increase performance?" ,
          answerOption : [
            {answerText: "new Dom", isCorrect: false},
            {answerText: "Original Dom", isCorrect: false},
            {answerText: "Virtual Dom", isCorrect: true},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     {
          questionsText : "What is ReactJS?" ,
          answerOption : [
            {answerText: "Server-side framework", isCorrect: false},
            {answerText: "user interface framework", isCorrect: true},
            {answerText: "Both", isCorrect: false},
            {answerText: "None of above", isCorrect: false},
          ],
     },
     {
          questionsText : "Who created React.js?" ,
          answerOption : [
            {answerText: "Jorden mike", isCorrect: false},
            {answerText: "Jorden walke", isCorrect: true},
            {answerText: "Time lee", isCorrect: false},
            {answerText: "Jorden lee", isCorrect: false},
          ],
     },
     {
          questionsText : "In which language is React.js written?" ,
          answerOption : [
            {answerText: "c++", isCorrect: false},
            {answerText: "JavaScript", isCorrect: true},
            {answerText: "Java", isCorrect: false},
            {answerText: "Python", isCorrect: false},
          ],
     },
     {
          questionsText : "What is Babel?" ,
          answerOption : [
            {answerText: "JavaScript Compiler", isCorrect: true},
            {answerText: "JavaScript interpreter", isCorrect: false},
            {answerText: "JavaScript transpiler", isCorrect: false},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     {
          questionsText : "Identify the command used to create a react app." ,
          answerOption : [
            {answerText: "npm install -g create-react-app", isCorrect: true},
            {answerText: "npm install create-react-app", isCorrect: false},
            {answerText: "npm -g create-react-app", isCorrect: false},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     {
          questionsText : "Which of the following port is the default where webpack-dev-server runs?" ,
          answerOption : [
            {answerText: "3000", isCorrect: false},
            {answerText: "3030", isCorrect: false},
            {answerText: "3306", isCorrect: false},
            {answerText: "8080", isCorrect: true},
          ],
     },
     {
          questionsText : "How many elements can a valid react component return?" ,
          answerOption : [
            {answerText: "2", isCorrect: false},
            {answerText: "4", isCorrect: false},
            {answerText: "3", isCorrect: false},
            {answerText: "1", isCorrect: true},
          ],
     },
     {
          questionsText : "A state in React.js is also known as?" ,
          answerOption : [
            {answerText: "The internal storage of the component", isCorrect: true},
            {answerText: "External storage of component", isCorrect: false},
            {answerText: "Permanent storage", isCorrect: false},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     
     {
          questionsText : "Among The following options, choose the one which" ,
          answerOption : [
            {answerText: "DOM", isCorrect: false},
            {answerText: "Flux", isCorrect: true},
            {answerText: "JSX", isCorrect: false},
            {answerText: "Props", isCorrect: false},
          ],
     },
     {
          questionsText : "Which company developed ReactJS?" ,
          answerOption : [
            {answerText: "Apple", isCorrect: false},
            {answerText: "Microsoft", isCorrect: false},
            {answerText: "Google", isCorrect: false},
            {answerText: "Facebook", isCorrect: true},
          ],
     },
     {
          questionsText : "React is a ___________" ,
          answerOption : [
            {answerText: "JS framework", isCorrect: false},
            {answerText: "JS Library", isCorrect: true},
            {answerText: "both", isCorrect: false},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     {
          questionsText : "Choose the method which is not a part of ReactDOM?" ,
          answerOption : [
            {answerText: "ReactDOM.createPortal()", isCorrect: false},
            {answerText: "ReactDOM.hydrate()", isCorrect: false},
            {answerText: "ReactDOM.destroy()", isCorrect: true},
            {answerText: "ReactDOM.findDOMNode()", isCorrect: false},
          ],
     },
     {
          questionsText : "ES6 stands for _________" ,
          answerOption : [
            {answerText: "ECMA 6", isCorrect: false},
            {answerText: "ECMAJavaScript 6", isCorrect: false},
            {answerText: "ECMAscript 6", isCorrect: true},
            {answerText: "Ejavascript 6", isCorrect: false},
          ],
     },
     {
          questionsText : "Total ways of defining variables in ES6 is?" ,
          answerOption : [
            {answerText: "3", isCorrect: true},
            {answerText: "2", isCorrect: false},
            {answerText: "1", isCorrect: false},
            {answerText: "4", isCorrect: false},
          ],
     },
     {
          questionsText : " Choose the method with refers to the parent class in ReactJS?" ,
          answerOption : [
            {answerText: "this()", isCorrect: false},
            {answerText: "super()", isCorrect: true},
            {answerText: "iniherits()", isCorrect: false},
            {answerText: "self()", isCorrect: false},
          ],
     },
     {
          questionsText : "JSX stands for __________" ,
          answerOption : [
            {answerText: "JavaScript XML", isCorrect: true},
            {answerText: "JSON XML", isCorrect: false},
            {answerText: "JSON", isCorrect: false},
            {answerText: "JavaScript and Angularjs", isCorrect: false},
          ],
     },
     {
          questionsText : "The function which is called to render HTML to a web page in react?" ,
          answerOption : [
            {answerText: "ReactDOM_render()", isCorrect: false},
            {answerText: "render()", isCorrect: true},
            {answerText: "render_DOM()", isCorrect: false},
            {answerText: "DOM_HTML()", isCorrect: false},
          ],
     },
     {
          questionsText : "What happens if you render an input element with disabled = {false}?" ,
          answerOption : [
            {answerText: "it will be renders as enabled", isCorrect: true},
            {answerText: "it will be renders as disabled", isCorrect: false},
            {answerText: "it will be not renderd at all", isCorrect: false},
            {answerText: "None of the above", isCorrect: false},
          ],
     },
     {
          questionsText : "Choose the library which is most often associated with react?" ,
          answerOption : [
            {answerText: "sinon", isCorrect: false},
            {answerText: "chai", isCorrect: false},
            {answerText: "jest", isCorrect: true},
            {answerText: "mocha", isCorrect: false},
          ],
     },
     {
          questionsText : "What is used to handle code-splitting?" ,
          answerOption : [
            {answerText: "React.Lazy", isCorrect: true},
            {answerText: "React.memo", isCorrect: false},
            {answerText: "React.fallback", isCorrect: false},
            {answerText: "React.split", isCorrect: false},
          ],
     },
     {
          questionsText : "Why is useLayoutEffect used?" ,
          answerOption : [
            {answerText: "to complete the update", isCorrect: false},
            {answerText: "to optimize for all devices", isCorrect: false},
            {answerText: "to change the layout of the screen", isCorrect: false},
            {answerText: "When you need the browser to paint before the effectors", isCorrect: true},
          ],
     },
     {
          questionsText : "In react, the key should be?" ,
          answerOption : [
            {answerText: "unique among his siblings only.", isCorrect: true},
            {answerText: "unique in the DOM", isCorrect: false},
            {answerText: "Does not requires to be unique", isCorrect: false},
            {answerText: "All of the above", isCorrect: false},
          ],
     },
     {
          questionsText : " Which of the following terms commonly described react applications?" ,
          answerOption : [
            {answerText: "Declarative", isCorrect: true},
            {answerText: "imperative", isCorrect: false},
            {answerText: "integrated", isCorrect: false},
            {answerText: "closed", isCorrect: false},
          ],
     },
     {
          questionsText : "Latest version of React______" ,
          answerOption : [
            {answerText: "18.2.0", isCorrect: true},
            {answerText: "18.1.0", isCorrect: false},
            {answerText: "18.0.0", isCorrect: false},
            {answerText: "17.0.2", isCorrect: false},
          ],
     },

]
export default questions;