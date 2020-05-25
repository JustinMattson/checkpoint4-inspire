import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.image;
  let imgUrl = image.imgUrl;
  console.log(imgUrl);
  document.getElementById("bg-image").style.backgroundImage = `${imgUrl}`;
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    console.log("hi from image control");
    ImageService.getImage();
    store.subscribe("image", _drawImage);
  }
  getImage() {
    ImageService.getImage();
  }
}
