const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const localhourEl = document.getElementById("localHour");
const localminuteEl = document.getElementById("localMinutes");
const localsecondsEl = document.getElementById("localSeconds");
const localampmEl = document.getElementById("localampm");

function updateClock(){


    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm = "AM";
    if (h>12){        h=h-12;
        ampm="PM";
    }

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondsEl.innerText=s;
    ampmEl.innerText=ampm;


    const timeZone = "Asia/Kolkata";
    const currentDate = new Date();
    const localTime = new Date(currentDate.toLocaleString("en-US", { timeZone: timeZone }));

    let localh= localTime.getHours(); 
    let localm= localTime.getMinutes();
    let locals=localTime.getSeconds();
      let localampm = "AM";
      console.log(localh);
      if (localh > 12){
          localh=localh-12;
          localampm="PM";
      }


    localhourEl.innerText=localh;
    localminuteEl.innerText=localm;
    localsecondsEl.innerText=locals;
    localampmEl.innerText=localampm;
  

}

updateClock();
setInterval(updateClock,1000);