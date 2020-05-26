import QuoteService from "../services/quote-service.js";
import store from "../store.js";

// TODO Ask why Template is angry.
function _drawQuote() {
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.Template;
}

//NOTE DONE Create methods for constructor, and rendering the quote to the page
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
