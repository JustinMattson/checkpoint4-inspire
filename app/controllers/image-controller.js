import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  try {
    let image = store.State.image;
    //console.log(image.imgUrl);
    let imgUrl = image.imgUrl;
    document.getElementById("bg-image").style.backgroundImage = `${imgUrl}`;
  } catch (error) {
    //console.log("error caught by image controller");
    let imgUrl = "url(./assets/img/IMAG1868~2.jpg)";
    document.getElementById("bg-image").style.backgroundImage = `${imgUrl}`;
  }
}

//NOTE DONE Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    ImageService.getImage();
    store.subscribe("image", _drawImage);
    store.subscribe("greeting", _drawImage);
  }
  getImage() {
    ImageService.getImage();
  }
}
