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

function _drawDate() {
  let date = store.State.date;
  document.getElementById("date").innerText = date;
}

export default class Clock {
  constructor() {
    store.subscribe("clock", _drawClock);
    store.subscribe("time", _drawClock);
    store.subscribe("date", _drawDate);
    store.subscribe("greeting", _drawGreeting);
  }

  toggleMilitaryTime() {
    clockService.toggleMilitaryTime();
  }
}
