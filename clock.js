setInterval(displayTime, 1000);
function displayTime() {
  var nowTime = new Date();
  let hoursOfDay = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let today = weekDay[nowTime.getDay()];
  let months = nowTime.toLocaleString("default", { month: "short" });
  let year = nowTime.getFullYear();
  let period = "AM";

  if (hoursOfDay > 12) {
    hoursOfDay -= 12;
    period = "PM";
  }

  if (hoursOfDay === 0) {
    hoursOfDay = 12;
    period = "AM";
  }

  hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hoursOfDay + ":" + minutes + ":" + seconds + " " + period;

  document.getElementById("Clock").innerHTML =
    currentTime + "  " + today + "     " + months + " " + year;
}
displayTime();

setInterval(displayTime, 1000);
