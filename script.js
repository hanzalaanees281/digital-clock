const hourEle = document.getElementById("hour");
const minuteEle = document.getElementById("minute");
const secondEle = document.getElementById("second");
const ampmEle = document.getElementById("ampm");


setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let ampm = "AM";
    if (hour > 11) {
        ampm = "PM";
    } else if (hour > 12) {
        hour -= 12;
    }

  hourEle.innerText = hour;
  minuteEle.innerText = date.getMinutes();
  secondEle.innerText = date.getSeconds();
  ampmEle.innerText = ampm;

}, 1000);