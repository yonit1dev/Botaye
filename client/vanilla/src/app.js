import { PlaceLocator } from "./components/placeLocator";
import { DOM, MAP, MODAL } from "./utils/globals";

class App {
  static init() {
    new PlaceLocator(DOM, MODAL, MAP);
  }
}

App.init();
