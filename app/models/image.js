export default class Image {
  constructor(data) {
    this.id = data.id;
    this.imgUrl = data.imgUrl;
    this.copyright = data.copyright;
    this.site = data.site;
  }

  get Template() {
    return /*html*/ `
    ${this.imgUrl}
    ${this.id}
    ${this.site}
    $
    `;
  }
}
