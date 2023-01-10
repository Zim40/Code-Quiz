var clearScore = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var scoreList = document.getElementById("#scoreList");


// button returns you to quiz page 
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});


// Clears leaderboard
clearScore.addEventListener("click", function () {
    var myList = document.getElementById("scoreList");
    myList.innerHTML = '';
});










// shows each submitted li element 

var finals = JSON.parse(localStorage.getItem("allScores"));
var allScores = finals;

if (allScores) {

    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        var scoreList = document.querySelector("#scoreList");
        createLi.textContent = "Name: " + allScores[i].initials + " " + "score: " + allScores[i].score;
        scoreList.appendChild(createLi);


    };


}



