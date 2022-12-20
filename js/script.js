// get element from dom 
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


// Set the date we're counting down to

const countDownDate = new Date("dec 25, 2022 00:00:00").getTime();
console.log(countDownDate)

//create a contdown functio

const xmas = setInterval (function (){
    const currentDate = new Date().getTime();
    //  calculate the time between today and Christmas
    const missinTime = countDownDate - currentDate
    // transform the thousand seconds into days, hours, minutes and seconds

    const days = Math.floor(missinTime / (1000 * 60 * 60 * 24));
    console.log(days)
}, 1000);
