import Quote from "../models/quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000,
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuote() {
    let res = await _quoteApi.get();
    let quoteObj = res.data.quote;
    let quote = quoteObj.body;
    let author = quoteObj.author;
    if (quote == null || author == null) {
      this.getQuote();
    }
    let myQuoteObj = {
      quote: quote,
      author: author,
    };
    store.commit("quote", new Quote(myQuoteObj));
  }
}

const quoteService = new QuoteService();
export default quoteService;
