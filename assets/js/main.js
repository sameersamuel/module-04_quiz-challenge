var buttonEl = document.querySelector('#start-button');
var timerEl = document.getElementById('timer');


function submitBtn {
//when submit button is clicked "question-1" container display should change from block to hide, and "question-2" container should go from hide to block.

};




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