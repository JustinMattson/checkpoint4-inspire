export default class Quote {
  constructor(data) {
    this.quote = data.quote;
    this.author = data.author;
  }

  get Template() {
    return /*html*/ `
    <span class="extra"> &nbsp; ~${this.author}</span>
    <p class="action" onclick="app.quoteController.getQuote()">${this.quote}</p>
    `;
  }
}
