import store from "../store.js";
import clockService from "../services/clockService.js";

function _drawClock() {
  let template = "";
  let time = store.State.time;
  template += /*html*/ `
    <h1 class="action" onclick="app.clockController.toggleMilitaryTime()">${time}</h1>
    `;
  document.getElementById("time").innerHTML = template;
}
function _drawGreeting() {
  let greeting = store.State.greeting;
  document.getElementById("greeting").innerText = greeting;
}

export default class Clock {
  constructor() {
    console.log("hi from clock controller");
    store.subscribe("clock", _drawClock);
    store.subscribe("time", _drawClock);
    store.subscribe("greeting", _drawGreeting);
  }

  toggleMilitaryTime() {
    clockService.toggleMilitaryTime();
  }
}
