 var buttonToBegin = document.getElementById("buttonToBegin");
 var time = 90;
 var countDown = true;
 var begin= false;
 var remaining = document.getElementById("remaining");
 var main =  document.getElementById("main");
 var box = document.getElementById("box");
 var header = document.getElementById("header");
 var mcA = document.getElementById("mcA");
 var mcB = document.getElementById("mcB");
 var mcC = document.getElementById("mcC");
 var mcD = document.getElementById("mcD");
 var rightChoice = document.getElementById("rightChoice");    
 var topScores= [];
 var startingScore = 0;
 let i = 0;


var questions = [
    {
        question: "Javascript is considered what kind of language?",
        mc: ["A) Object-Oriented", "B. Object-Based", "C. Procedural", "D. None of the above"],
        rightChoice: 0
    },
    
    {
        question: "Which of the following keyword is used to define a variable in Javascript?",
        mc: ["A. var", "B. let", "C. Both A and B", "D. None of the above"],
        rightChoice: 2
    },
    
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        mc: ["A. getElementById()", "B. getElementsByClassName()", "C. Both A and B", "D. None of the above"],
        rightChoice: 2
    },
    
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        mc: ["A. Throws an error", "B. Ignores the statement", "C. Gives a warning", "D. None of the above"],
        rightChoice: 1
    },
    
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        mc: ["A. document.write()", "B. console.log()", "C. window.alert()", "D. All of the above"],
        rightChoice: 3
    },
    
    {
        question: "How can a datatype be declared to be a constant type?",
        mc: ["A. const", "B. var", "C. let", "D. constant"],
        rightChoice: 0
    },
    
    {
        question: "What keyword is used to declare an asychronous function in Javascript?",
        mc: ["A. async", "B. await", "C. setTimeout", "D. None of the above"],
        rightChoice: 0
    },
    
    {
        question: "How do you write a comment in Javascript?",
        mc: ["A. /* */", "B. //", "C. #", "D. $$"],
        rightChoice: 1
    }];

 function setAllQuestions() {
    header.textContent = questions[i].question;
    mcA.textContent = questions[i].mc[0]; 
    mcB.textContent = questions[i].mc[1]; 
    mcC.textContent = questions[i].mc[2]; 
    mcD.textContent = questions[i].mc[3]; 
    };

var remainingInterval = setInterval(remaining, 1000);
function setRemaining() {
        if (begin) time--;
        if(time<= 0) {finish();
        time = 0;  
        }
        document.getElementById("time").base = time;
    }

buttonToBegin.addEventListener("click", function() {
    box.style.display = "block";
    main.style.display ="none";
    remaining.style.display= "block";
    setAllQuestions();
    begin= true;
});

mcA.addEventListener('click', function(event) {
        rightChoice= questions[i].rightChoice;
        console.log("rightChoice " + rightChoice);
        if (0 == rightChoice) { 
            document.getElementById("say").base = "Correct!";
            setTimeout(function() {
            document.getElementById("say").base = "";
                },
                1000
            );   
            document.getElementById("score").base = score;
        } else {
            countDown -= 5;
            document.getElementById("say").base = "Wrong!";
            setTimeout(function() {
                document.getElementById("say").base = "";
                    },
                    1000
                );
        }
        if (i >= questions.length -1) {
        finish();
        } else {
            i++ 
            setAllQuestions();
        };
    });

mcB.addEventListener('click', function(event) {
    rightChoice = questions[i].rightChoice;
    console.log(rightChoice);
        if (1 === rightChoice) { 
            document.getElementById("say").base = "Correct!";
            setTimeout(function() {
                document.getElementById("say").base = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").base = score;
        } else {
            countDown -= 5;
            document.getElementById("say").base = "Wrong!";
            setTimeout(function() {
                document.getElementById("say").base = "";
                    },
                    1000
                );
        }
        if (i >= questions.length -1) {
        finish();
        } else {
         i++ 
        setAllQuestions();
        };
    });

mcC.addEventListener('click', function(event) {
    rightChoice = questions[i].rightChoice;
    console.log(rightChoice);
    if (2 === rightChoice) { 
        document.getElementById("say").base = "Correct!";
        setTimeout(function() {
            document.getElementById("say").base = "";
                },
                1000
            );
        score++;
        document.getElementById("score").base = score;
    } else {
        countDown -= 5;
        document.getElementById("say").base = "Wrong!";
        setTimeout(function() {
            document.getElementById("say").base = "";
                },
                1000
            );
    }
    if (i >= questions.length -1) {
    finish();
    } else {
        i++ 
        setAllQuestions();
    };
    });

mcD.addEventListener('click', function(event) {
    rightChoice= questions[i].rightChoice.value;
    console.log(rightChoice);
    if (3 === rightChoice) { 
        document.getElementById("say").base = "Correct!";
        setTimeout(function() {
            document.getElementById("say").base = "";
                },
                1000
            );
        score++;
        document.getElementById("score").base = score;
    } else {
        countDown -= 5;
        document.getElementById("say").base = "Wrong!";
        setTimeout(function() {
            document.getElementById("say").base = "";
                },
                1000
            );
    }
    if (i >= questions.length -1) {
       finish();
    } else {
        i++ 
        setAllQuestions();
    };
});

        function finish(){
            document.getElementById("finished").style.display= "none";
            document.getElementById("box").style.display="none";
            document.getElementById("remaining").style.display= "none";
            document.getElementById("recordScore").style.display= "none";
            document.getElementById("say").base="";
            document.getElementById("final_score").base= score;
            }

     
            function submit_score() {
             topScores.push(document.getElementById("initials").value + " " + score);
             views();
            }

        function views(){
        
     
            document.getElementById("box").style.display="none";
            document.getElementById("finished").style.display= "none";
            document.getElementById("topScores_page").style.display="none";
            output="";
            for(let k=0; k<topScores.length; k++){
                 output = output + "  " + topScores[k];
            }
            document.getElementById("topScores").base= output;                
             refresh();
        }
