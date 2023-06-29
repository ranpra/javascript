


const newYear='01/01/2024';

const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('min');
const secondsEL = document.getElementById('seconds');

function countdown(){
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();

    const totalSeconds= (newYearsDate-currentDate) / 1000;
    const days=Math.floor(totalSeconds  /  3600 / 24);
    const hours=Math.floor(totalSeconds / 3600) % 24;
    const minutes=Math.floor(totalSeconds / 60) % 60;
    const seconds=Math.floor(totalSeconds) % 60;
    console.log(days,hours,minutes,seconds);

    daysEL.innerHTML=days
    hoursEL.innerHTML=hours
    minutesEL.innerHTML=minutes
    secondsEL.innerHTML=seconds

}

countdown();

setInterval(countdown,1000);