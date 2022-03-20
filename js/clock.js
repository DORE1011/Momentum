const clock = document.querySelector(".clock");
const clockSec = document.querySelector(".clock_sec");
const sun = document.querySelector(".clock_sun");

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds =String(date.getSeconds()).padStart(2, "0");
    
    if(hours<13){
        sun.innerText = "오전"
        clock.innerText = `${hours}:${minutes}`;
    }else{
        sun.innerHTML = "오후"
        dayhours = hours-12;
        clock.innerText = `${dayhours}:${minutes}`;
    }
    clockSec.innerText = `${seconds}`
}

getClock();
setInterval(getClock,1000);