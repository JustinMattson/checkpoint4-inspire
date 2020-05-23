import store from "../store.js";

setInterval(getGreeting, 500);
setInterval(getTime, 500);

function getTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = ("0" + time.getMinutes()).slice(-2);
  if (store.State.clock) {
    if (hours > 12) {
      hours -= 12;
    }
    if (hours == 0) {
      hours = 12;
    }
    // TODO verify minutes have two digits : minutes < 10
    // TODO if getTime is called at load and every 5 seconds thereafter
    // why does it take 5 seconds to render the clock on the DOM?
    store.commit("time", hours + ":" + minutes);
    return hours + ":" + minutes;
  } else {
    store.commit("time", hours + ":" + minutes);
    return hours + ":" + minutes;
  }
}

function getGreeting() {
  let greeting = "";
  let d = new Date();
  let now = d.getTime();
  let sunrise = store.State.sunrise;
  let sunset = store.State.sunset;
  if (now < sunrise || now > sunset) {
    //console.log("Good Night");
    greeting = "Good Night";
  } else if (d.getHours() < 12) {
    //console.log("Good Morning");
    greeting = "Good Morning";
  } else if (d.getHours() < 17) {
    //console.log("Good Afternoon");
    greeting = "Good Afternoon";
  } else {
    //console.log("Good Evening");
    greeting = "Good Evening";
  }
  //console.log(greeting);
  store.commit("greeting", greeting);

  //console.log(sunrise + " sunrise getGreeting()");
  //console.log(sunset + " sunset getGreeting()");
}

// Morning is from sunrise to 11:59 AM.
// Afternoon starts at 12:00 PM.
// Evening is from 5:01 PM to sunset.
// Night is from sunset to sunrise

class ClockService {
  constructor() {
    getTime();
    getGreeting();
    console.log("called getGreeting");
  }
  toggleMilitaryTime() {
    store.State.clock
      ? (store.State.clock = false)
      : (store.State.clock = true);
  }
}

const clockService = new ClockService();
export default clockService;
