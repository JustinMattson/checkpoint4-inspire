import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000,
});

setInterval(async (getWeather) => {
  console.log("checking weather");
}, 10000);

class WeatherService {
  toggleTempUnit() {
    let tempObj = store.State.weather;
    store.State.weather.unit
      ? (store.State.weather.unit = false)
      : (store.State.weather.unit = true);
    store.commit("weather", tempObj);
  }
  async getWeather() {
    try {
      let res = await weatherApi.get();
      let weatherObj = res.data;

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
      //store.commit("sunrise", sunrise); // early commit, need to refactor clock before removing
      //console.log(sunrise);

      //store.commit("sunset", sunset); // early commit, need to refactor clock before removing
      store.commit("weather", new Weather(myWeatherObj));
    } catch (e) {
      console.error(e);
    }
  }
}

const weatherService = new WeatherService();
export default weatherService;
