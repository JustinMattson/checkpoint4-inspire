//import ImageController from "./controllers/quote-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import TodoController from "./controllers/todo-controller.js";
import WeatherController from "./controllers/weather-controller.js";
import ClockController from "./controllers/clock-controller.js";
import ImageController from "./controllers/image-controller.js";

//NOTE DONE Dont forget to register all your controllers
// The Clock Controller and Clock Service were bonus
// Model not utilized.
class App {
  constructor() {
    //this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    this.todoController = new TodoController();
    this.weatherController = new WeatherController();
    this.clockController = new ClockController();
    this.imageController = new ImageController();
  }
}

window["app"] = new App();
