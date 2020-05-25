export default class Quote {
  constructor(data) {
    this.quote = data.quote;
    this.author = data.author;
  }

  get Template() {
    return /*html*/ `
    <span class="action" onclick="app.quoteController.getQuote()">${this.quote}<span class="extra"> &nbsp; ~${this.author}</span></span>
    `;
  }
}
