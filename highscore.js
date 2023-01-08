var clearScore = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var scoreList = document.querySelector("#scoreList")

// button returns you to quiz page 
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});




// shows each submitted li element 
var scoreList = localStorage.getItem("allScores");


if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        scoreList.appendchild(createLi);

    }
    
}
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});