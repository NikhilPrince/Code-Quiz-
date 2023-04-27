var questions = [
    {
        question: "Javascript is considered what kind of language?",
        choices: ["A. Object-Oriented", "B. Object-Based", "C. Procedural", "D. None of the above"],
        answer: "A. Object-oriented"
    },
    
    {
        question: "Which of the following keyword is used to define a variable in Javascript?",
        choices: ["A. var", "B. let", "C. Both A and B", "D. None of the above"],
        answer: "C. Both A and B"
    },
    
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["A. getElementbyId()", "B. getElementsByClassName()", "C. Both A and B", "D. None of the above"],
        answer: "C. Both A and B"
    },
    
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: ["A. Throws an error", "B. Ignores the statement", "C. Gives a warning", "D. None of the above"],
        answer: "B. Ignores the statement"
    },
    
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["A. document.write()", "B. console.log()", "C. window.alert()", "D. All of the above"],
        answer: "D. All of the above"
    },
    
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["A. const", "B. var", "C. let", "D. constant"],
        answer: "A. const"
    },
    
    {
        question: "What keyword is used to declare an asychronous function in Javascript?",
        choices: ["A. async", "B. await", "C. setTimeout", "D. None of the above"],
        answer: "A. async"
    },
    
    {
        question: "How do you write a comment in Javascript?",
        choices: ["A. /* */", "B. //", "C. #", "D. $$"],
        answer: "B. //"
    },
    
    {
        question: "Which of the following is not a Javascript framework?",
        choices: ["A. Node", "B. Vue", "C. React", "D. Cassandra"],
        answer: "D. Cassandra"
    },
    
    {
        question: "Which of the following are closures in Javascript?",
        choices: ["A. Variables", "B. Functions", "C. Objects", "D. Allof the above"],
        answer: "D. All of the above"
    },
    
    ];

    var clock = document.querySelector("#clock");
    var remaingTime = document.querySelector('#remaingTime');
    var finished = document.querySelector('#finished');

    var beginDiv = document.querySelector('#beginDiv');
    var beginQuizBtn = document.querySelector('#begin-quiz-button')