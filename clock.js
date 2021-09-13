let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let angSec = sec * 6;
let angMin = min * 6 + sec * 0.1;
let angHour = hour * 30 + min * 0.5;

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = 'AM';
  if (hour == 12) {
    am_pm = 'PM';
  }
  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  }
  if (hour == 0) {
    hour = 12;
    am_pm = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  //   let currentTime = hour + ':' + min + ':' + sec;
  document.getElementById('hh').innerText = hour;
  document.getElementById('mm').innerText = min;
  document.getElementById('ss').innerText = sec;
  document.getElementById('am_pm').innerHTML = am_pm;
  angSec = sec * 6;
  angMin = min * 6 + sec * 0.1;
  angHour = hour * 30 + min * 0.5;

  document.getElementById('sec').style.transform = `rotate(${angSec}deg)`;
  document.getElementById('min').style.transform = `rotate(${angMin}deg)`;
  document.getElementById('hour').style.transform = `rotate(${angHour}deg)`;
}
showTime();
