// NOTE: I do not remember why this is needed but if I remove this the toggle military function doesn't work!
// NOTE: separation complete - clock model not needed 5/25 @ 9:00am
import store from "../store.js";
export default class Clock {
  constructor() {
    this.hour = store.State.time[1];
    this.minutes = store.State.time[2];
    this.ampm = store.State.time[0];
    this.clock = store.State.clock;
  }

  get Template() {
    return /*html*/ `
    <p class="action" onclick="app.clockController.toggleMilitaryTime()">${this.hour}:${this.minutes} ${this.ampm}</p>
    `;
  }
}
