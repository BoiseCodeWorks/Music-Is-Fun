import SongsController from "./Controllers/SongsController.js";

class App {
  constructor() {
    this.controllers = {
      SongsController: new SongsController()
    }
  }
}

window["app"] = new App();
