export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE NOPE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //NOTE DONE You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;
    this.celsius = (data.main.temp - 273.15).toFixed(1);
    this.fahrenheit = ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
  }

  get Template() {
    return /*html*/ `
     <div>
      <span>${this.kelvin}°K | </span>
      <span>${this.celsius}°C | </span>
      <span>${this.fahrenheit}°F</span>
    </div>
    `;
  }
}
