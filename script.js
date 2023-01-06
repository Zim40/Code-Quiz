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
var penalty = 5;
var ulCreate = document.querySelector("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time Left: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "Times up!";
            }
        }, 1000);
    }
    render(questionList);


})

function render(questionList) {
    questionsDiv.innerHTML = [""];
    ulCreate.innerHTML = [""];
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

}
questionList++;
if (questionList >= questions.length) {
    allDone();
    createDiv.textContent = "End of Quiz" + " " + "you got " + score + "/" + questions.length + " Correct!";
} else {
    render(questionList);
}
questionsDiv.appendChild(createDiv);
