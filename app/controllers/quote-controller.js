import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function drawQuote() {
  console.log("drawQuote");
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    console.log("hi from quote controller");
    QuoteService.getQuote();
  }
}
