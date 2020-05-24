import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000,
});

class WeatherService {
  toggleTempUnit() {
    let tempObj = store.State.weather;
    store.State.weather.unit
      ? (store.State.weather.unit = false)
      : (store.State.weather.unit = true);
    store.commit("weather", tempObj);
  }
  async getWeather() {
    //console.log("Calling the Weatherman");
    let res = await weatherApi.get();
    //console.log(res.data);
    //console.log("^res.data");
    let weatherObj = res.data;
    //console.log(weatherObj);
    //console.log("^weatherObj");

    let city = weatherObj.name;
    let temperature = (weatherObj.main.temp - 273.15).toFixed(1);
    let forecast = res.data.weather[0];
    let currentCondition = forecast.description;
    // TODO ask why I couldn't just pull this out of the res.data in the Model!
    let sunrise = weatherObj.sys.sunrise;
    let sunset = weatherObj.sys.sunset;

    let myWeatherObj = {
      city: city,
      temperature: temperature,
      currentCondition: currentCondition,
      sunrise: sunrise,
      sunset: sunset,
    };
    //console.log(myWeatherObj);
    //console.log("^myWeatherObj");
    store.commit("sunrise", sunrise); // early commit, need to refactor clock before removing
    store.commit("sunset", sunset); // early commit, need to refactor clock before removing
    store.commit("weather", new Weather(myWeatherObj));
    //store.commit("weather", new Weather(res.data));
    //console.log(store.State.weather);
    //console.log("^store.state.weather");
  }
}

const weatherService = new WeatherService();
export default weatherService;
