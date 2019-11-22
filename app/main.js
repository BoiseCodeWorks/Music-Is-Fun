import SongsController from "./Controllers/SongsController.js";

class App {
  songsController = new SongsController();
}

window["app"] = new App();
