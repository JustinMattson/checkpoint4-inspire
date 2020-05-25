import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImage() {
    let res = await imgApi.get();
    let id = res.data.id;
    let imgUrl = res.data.url;
    let copyright = res.data.copyright;
    let imgObj = {
      id: id,
      imgUrl: "url('" + imgUrl + "')",
      copyright: copyright,
    };
    store.commit("image", new Image(imgObj));
    console.log(res);
  }
  constructor() {
    console.log("hi from img control");
  }
}

const imageService = new ImageService();
export default imageService;
