import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.image;
  let imgUrl = image.imgUrl;
  document.getElementById("bg-image").style.backgroundImage = `${imgUrl}`;
}

//NOTE DONE Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    ImageService.getImage();
    store.subscribe("image", _drawImage);
  }
  getImage() {
    ImageService.getImage();
  }
}
