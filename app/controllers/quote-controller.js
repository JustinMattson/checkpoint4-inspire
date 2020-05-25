import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function _drawQuote() {
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.Template;
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    QuoteService.getQuote();
    store.subscribe("quote", _drawQuote);
  }
  getQuote() {
    QuoteService.getQuote();
  }
}
