// get element from dom 
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

//! functions ----------------------------------------
//create function to take curent date
const getCurentDate = () =>{
    const newDate = new Date()
    //get days 
    const days = newDate.getDate()
    //get hours 
    const hours = newDate.getHours()
    // get minutes 
    const minutes = newDate.getMinutes()
    //get seconds
    const seconds = newDate.getSeconds()
    
    return  {
        days,
        hours,
        minutes,
        seconds
      };

}

const date = getCurentDate()

console.log(date.days)
