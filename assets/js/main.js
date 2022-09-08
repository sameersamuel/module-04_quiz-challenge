var buttonEl = document.querySelector('#start-button');
var timerEl = document.getElementById('timer');





buttonEl.addEventListener("click", startQuiz);

function startQuiz () {
    prompt("button works!");
    console.log("button to console")
};

function countdown() {
    time--;
    timerEl.textContent = time;
    if(time <= 0){
        endQuiz();
    }
}