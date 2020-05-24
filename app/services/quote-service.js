import Quote from "../models/quote.js";
//import store from "../store";

console.log("from q-service");

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000,
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuote() {
    console.log("calling quotemaster general");
    let res = await _quoteApi.get();
    console.log(res);
    store.commit("quote", res);
  }
}

const quoteService = new QuoteService();
export default quoteService;
