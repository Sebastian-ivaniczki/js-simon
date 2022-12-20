// get element from dom 
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


// Set the date we're counting down to

const countDownDate = new Date("dec 25, 2022 00:00:00").getTime();


//create a contdown functio

const xmas = setInterval (function (){
    const currentDate = new Date().getTime();
    //  calculate the time between today and Christmas
    const missingTime = countDownDate - currentDate;
    // transform the thousand seconds into days, hours, minutes and seconds

    let days = Math.floor(missingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((missingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =  Math.floor((missingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((missingTime % (1000 * 60)) / 1000);
    //add a 0 in front of the numbers if they are < 0
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds

    if(missingTime <= 0) {
        clearInterval(xmas);
    }
}, 1000);
