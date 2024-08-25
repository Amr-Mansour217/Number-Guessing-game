let container = document.getElementById("container")
let input = document.getElementById("inputs-text");
let calcBtn = document.getElementById("calculateBtn");
let wrongNumber = document.getElementById("wrong-number");
let lowAnswer = document.getElementById("low");
let highAnswer = document.getElementById("high");
let wrongText = document.getElementById("text-wrong");
let rightText = document.getElementById("text-right");
let attemptsEl = document.getElementById("attempts");
let min = 1;
let max = 100;
let answer = Math.floor (Math.random()*(max - min+1)) + min ;
rightText.innerHTML = `CORRECT! The answer is ${answer}`;
highAnswer.innerHTML = "too high"
console.log(answer)
let attempts = 0;
let guess ;
let running = true;
calcBtn.addEventListener("click",function guessing(){
    while(running){
        guess = input.value;
        if(guess > answer){
            highAnswer.style.display = "inline-block"
        }if (guess < answer){
            if(highAnswer.style.display = "inline-block"){
                highAnswer.style.display = "none"
            }else{
                lowAnswer.style.display = "inline-block"
            }
        }
         if(guess == answer){
            `${rightText.style.display = "block"}`;
        }
        running = false;
    }
});