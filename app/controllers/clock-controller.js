import store from "../store.js";
import clockService from "../services/clock-Service.js";

function _drawClock() {
  let template = "";
  let time = store.State.time;
  template += /*html*/ `
    <p class="action" onclick="app.clockController.toggleMilitaryTime()">${time}</p>
    `;
  document.getElementById("time").innerHTML = template;
}
function _drawGreeting() {
  let greeting = store.State.greeting;
  document.getElementById("greeting").innerText = greeting;
}

function _drawDate() {
  let template = "";
  let date = store.State.date;
  template += /*html*/ `
    <h3 class="action" onclick="app.imageController.getImage()">${date}</h3>
  `;

  document.getElementById("date").innerHTML = template;
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
