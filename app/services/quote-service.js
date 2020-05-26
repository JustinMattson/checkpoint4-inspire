import Quote from "../models/quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000,
});

//NOTE DONE create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuote() {
    try {
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
    } catch (e) {
      console.log(e + "error in getting quote from _quoteApi");
    }
  }
}

const quoteService = new QuoteService();
export default quoteService;
