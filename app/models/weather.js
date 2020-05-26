export default class Weather {
  constructor(data) {
    //console.log("[RAW WEATHER API DATA]", data);
    //NOTE NOPE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //NOTE DONE You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    // NOTE I struggled to get this information to return from the res.data that got shoved into the store, so I pulled out what I wanted, then shoved only the data I wanted into the store.

    this.city = data.city;
    this.temperature = data.temperature;
    this.celsius = data.temperature;
    this.fahrenheit = (data.temperature * (9 / 5) + 32).toFixed(0);
    this.currentCondition = data.currentCondition;
    this.sunrise = data.sunrise;
    this.sunset = data.sunset;
    this.unit = false;
  }
  // NOTE DONE set up a toggle for K F C!
  get Template() {
    return /*html*/ `
     <div class="action" onclick="app.weatherController.toggleTempUnit()">
     <div>${this.city}</div>
     <div>(${this.currentCondition})</div>
     ${this.SubTemplate}      
    </div>
    `;
  }

  get SubTemplate() {
    if (!this.unit) {
      return /*html*/ `

      <span>${this.fahrenheit}°F</span>
  `;
    }
    return /*html*/ `
    <span>${this.celsius}°C</span>
    `;
  }
}
