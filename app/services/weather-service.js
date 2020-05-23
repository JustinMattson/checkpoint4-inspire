import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000,
});

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await weatherApi.get();
    console.log(res);
    //console.log("res from weatherman");
    // TODO ask why I couldn't just pull this out of the res.data in the Model!
    let sunrise = res.data.sys.sunrise;
    let sunset = res.data.sys.sunset;
    //console.log(sunrise);
    store.commit("sunrise", sunrise);
    //console.log(sunset);
    store.commit("sunset", sunset);
    store.commit("weather", new Weather(res.data));
  }
}

const weatherService = new WeatherService();
export default weatherService;
