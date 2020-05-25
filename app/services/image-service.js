import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
});

//NOTE DONE create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImage() {
    try {
      let res = await imgApi.get();
      let id = res.data.id;
      let imgUrl = res.data.large_url;
      let copyright = res.data.copyright;
      let site = res.data.site;
      if (imgUrl.slice(-3) != "jpg" || imgUrl == null) {
        console.log(imgUrl);
        console.log("attempting a better image...");
        setTimeout(this.getImage, 3000);
      }
      let imgObj = {
        id: id,
        imgUrl: "url('" + imgUrl + "')",
        copyright: copyright,
        site: site,
      };
      store.commit("image", new Image(imgObj));
      //console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
  constructor() {}
}

const imageService = new ImageService();
export default imageService;
