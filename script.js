const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElement = document.getElementById('date-picker');

const countdownElement = document.getElementById('countdown');
const countdownElementTitle = document.getElementById('countdown-title');
const countdownButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date input minimum to current date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

//Populate countdown, update UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
    const distance = countdownValue - now;
    const days = Math.floor(distance/day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    //Populate countdown
    countdownElementTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //Hide input form
    inputContainer.hidden = true;
    //Show countdown
    countdownElement.hidden = false;
    }, second);
}


//Get values from form
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    //Check for valid date
    if (countdownDate === '') {
        alert('Please select a date for the countdown');
    } else {
        //Get number version of current date, updateDOM
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
}
    }


//Reset all values
function reset() {
    //hide countdown, show input
    countdownElement.hidden = true;
    inputContainer.hidden = false;
    //stop countdown
    clearInterval(countdownActive);
    //reset Values
    countdownTitle = '';
    countdownDate = '';
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownButton.addEventListener('click', reset);