var clearScore = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var scoreList = document.getElementById("#scoreList");

// button returns you to quiz page 
goBack.addEventListener("click", function () {
    window.location.replace("Quiz.html");
});




// shows each submitted li element 

var finals = JSON.parse(localStorage.getItem("allScores"));
var allScores = finals;

if (allScores) {
    
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        var scoreList = document.querySelector("#scoreList");
        createLi.textContent =  allScores[i].initials + " " + allScores[i].score;
        scoreList.appendChild(createLi);
        

    };


}
console.log(allScores);
goBack.addEventListener("click", function () {
    window.location.replace("Quiz.html");
});
