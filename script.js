const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElement = document.getElementById('date-picker');

// Set date input minimum to current date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);