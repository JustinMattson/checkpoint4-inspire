import store from "../store.js";
import weatherService from "./weather-service.js";

setInterval(getGreeting, 1000);
setInterval(getTime, 1000);
setInterval(getDate, 1000);

function getTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = ("0" + time.getMinutes()).slice(-2);
  let ampm = time.getHours() > 11 ? " PM" : " AM";
  if (store.State.clock) {
    if (hours > 12) {
      hours -= 12;
    }
    if (hours == 0) {
      hours = 12;
    }
    // NOTE DONE verify minutes have two digits : minutes < 10
    // REVIEW if getTime is called at load and every 1 second thereafter
    // why does it take 1 second to render the clock on the DOM?
    store.commit("time", { hours: hours, minutes: minutes, ampm: ampm });
    return hours + ":" + minutes;
  } else {
    let hours = ("0" + time.getHours()).slice(-2);
    store.commit("time", { hours: hours, minutes: minutes, ampm: "" });
    return hours + ":" + minutes;
  }
}

function getDate() {
  let d = new Date();
  let day = ("0" + d.getDate()).slice(-2);
  let month = ("0" + (1 + d.getMonth())).slice(-2);
  let year = d.getFullYear();
  let today = year + "." + month + "." + day;
  if (d.getHours() == 23 && d.getMinutes() == 59) {
    setTimeout(weatherService.getWeather, 61000);
  }
  store.commit("date", today);
}

function getGreeting() {
  var greeting = "";
  var d = new Date();
  var now = 0.001 * d.getTime();
  //console.log(now) + " = now";
  var sunrise = store.State.weather.sunrise;
  //console.log(sunrise + " = sunrise");
  var sunset = store.State.weather.sunset;
  //console.log(sunset + " = sunset");
  if (now < sunrise || now > sunset) {
    greeting = "...Good Night...";
  } else if (d.getHours() < 12) {
    greeting = "Good Morning!";
  } else if (d.getHours() < 17 || (d.getHours() == 17 && d.getMinutes() <= 1)) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "- Good Evening -";
  }
  //console.log(greeting);
  store.commit("greeting", greeting);
}

// Morning is from sunrise to 11:59 AM.
// Afternoon starts at 12:00 PM.
// Evening is from 5:01 PM to sunset.
// Night is from sunset to sunrise

class ClockService {
  constructor() {
    getDate();
    getGreeting();
  }
  startTime() {
    getTime();
  }

  toggleMilitaryTime() {
    store.State.clock
      ? (store.State.clock = false)
      : (store.State.clock = true);
  }
}

const clockService = new ClockService();
export default clockService;
