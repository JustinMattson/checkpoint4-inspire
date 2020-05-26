import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//NOTE DONE Complete rendering data to the screen
function drawWeather() {
  let weather = store.State.weather;
  //console.log(weather);
  //console.log("^weather from store");

  document.getElementById("weather").innerHTML = weather.Template;
  //console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }

  toggleTempUnit() {
    WeatherService.toggleTempUnit();
  }
}
