// NOTE: I do not remember why this is needed but if I remove this the toggle military function doesn't work!
export default class Clock {
  constructor() {
    this.hour = getHours();
    this.minutes = getMintues();
  }
}
