// Questions and Answers
var questions = [
    {
        title: "Commonly used Data types DO NOT use:",
        choices: ["strings", "booleans", "numbers", "alerts"],
        answer: "alerts",
    },
    {
        title: "The condition in an if/else statement is enclosed within _____.",
        choices: ["curley brackets", "quotes", "parentheses", "square breacklets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers", "booleans", "strings", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "String variables must be enclosed by what when being assigned to a variable?",
        choices: ["parentheses", "quotes", "brackets", "commas"],
        answer: "quotes"
    },

];
console.log(questions);

// Variables regarding questions, button and timer 
var score = 0;
var questionList = 0;
var currentTime = document.querySelector("#timeCount");
var timer = document.querySelector("#startQuiz");
var questionsDiv = document.querySelector("#questionsDiv");

// Timer
var secondsLeft = 50;
var holdInterval = 0;
var penalty = 15;
var ulCreate = document.querySelector("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time Left: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "Times up!";
                if (questionList <= questionList.length) {
                    clearInterval(holdInterval)
                    allDone();
                }

            }
        }, 1000);
    }
    render(questionList);


});

function reset(resetButton) {
    var resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", reset);
    location.reload();

}

// Renders questions to the screen once start button is clicked
function render(questionList) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionList].title;
        var userChoices = questions[questionList].choices;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
    });
}
// ___________________
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionList].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong!";
        }
    }
    questionList++;

    if (questionList >= questions.length) {
        createDiv.textContent = "End of Quiz" + "" + " you got " + score + "/" + questions.length + " correct!";
        allDone();
    } else {
        render(questionList);
    }
    questionsDiv.appendChild(createDiv);
}

// __________________
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.textContent = "Quiz Completed";
    createH1.setAttribute = ("id", "createH1");

    questionsDiv.appendChild(createH1);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + (timeRemaining);
        questionsDiv.appendChild(createP);
        if (score === 0) {
            createP.textContent = "You failed to answer any questions correctly";
        }

    };




    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter Your Initials: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("id", "createInput", "type", "text");
    createInput.textContent = "";
    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("submit");
    createSubmit.setAttribute("id", "createSubmit");
    createSubmit.setAttribute("type", "submit");
    createSubmit.textContent = "Submit";
    questionsDiv.appendChild(createSubmit);

    createSubmit.addEventListener("click", function (scoreIn) {
        var initials = createInput.value;
        if (initials == false) {

            alert("No value entered!");
            scoreIn();

            
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining,
            };
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            console.log(finalScore);
        }
        console.log(newScore);
    });
    var finalScore = {
        initials: createInput.value,
        score: timeRemaining,
      };
      console.log(finalScore);
      
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      console.log(allScores);
      
      createSubmit.addEventListener("click", function () {
        window.location.replace("highscore.html");
      });
      
      
      
      
      



    // createSubmit.addEventListener("click", function () {
    //     if (initials === null) {
    //         alert("No value entered!");
    //     } else {
    //         var finalScore = {
    //             initials: initials,
    //             score: timeRemaining,
    //         };
    //         console.log(finalScore);
    //         var allScores = localStorage.getItem("allScores");
    //         if (allScores === null) {
    //             allScores = [];
    //         } else {
    //             allScores = JSON.parse(allScores);
    //         }
    //         allScores.push(finalScore);
    //         var newScore = JSON.stringify(allScores);
    //         localStorage.setItem("allScores", newScore);
    //         console.log(allScores);

    //         window.location.replace("highscore.html");

    //     }
    // });

}
/**Last steps - 
 * .create second HTML page to hold highscores
 * .create list with h1 Highscores
* .show highscores from quiz game*/
