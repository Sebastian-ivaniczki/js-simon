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

    const days = Math.floor(missingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((missingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes =  Math.floor((missingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((missingTime % (1000 * 60)) / 1000);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds

    if(missingTime <= 0) {
        clearInterval(xmas);
    }
}, 1000);
