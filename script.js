let input = document.querySelector('#input');
let calculateBtn = document.querySelector('#calculateBtn');
let wrongNumber = document.querySelector('.wrong-number');
let textWrong = document.querySelector('.text-wrong');
let low =  document.querySelector('#low')
let high =  document.querySelector('#high');
let textRight = document.querySelector('.text-right');
let attemptsElement = document.querySelector('#attempts');

let minimum = 1;
let maximum = 100;
let answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

let numberGuess = function() {
    calculateBtn.addEventListener('click', function() {
        while (running) {
            guess = input.value;
            guess = Number(guess);
            
            if (isNaN(guess)) {
                wrongNumber.style.display = 'block';
            } else if (guess < minimum || guess > maximum) {
                wrongNumber.style.display = 'block';
            } else {
                attempts++;
                if (guess < answer) {
                    `${low.style.display = 'block'}` + `${textWrong.style.display = 'block'}`;
                } else if (guess > answer) {
                    `${high.style.display = 'block'}` + `${textWrong.style.display = 'block'}`;
                } else {
                    `${textRight.style.display = 'block'}` + `The correct number is ${answer}. It took you ${attempts} attempts`;
                    // attemptsElement.textContent = attempts;
                    running = false;
                }
            }
        }
    });
};
numberGuess();