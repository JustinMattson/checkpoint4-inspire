export default class Image {
  constructor(data) {
    this.id = data.id;
    this.imgUrl = data.imgUrl;
    this.copyright = data.copyright;
  }

  get Template() {
    return /*html*/ `
    ${this.imgUrl}
    `;
  }
}
