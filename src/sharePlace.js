import DOMHelper from "./domHelper.js";

const DOM = new DOMHelper();

class PlaceLocator {
  constructor() {
    this.address = DOM.findInput;
    this.findPlace = DOM.findBtn;
    this.locateBtn = DOM.locateBtn;
  }

  findAddress() {
    this.findPlace.addEventListener("click", () => {
      const address = this.address.value;
    });
  }

  locateMe() {
    this.locateBtn.addEventListener("click", () => {
      console.log(navigator.geolocation);
    });
  }
}

const placeLocator = new PlaceLocator();
placeLocator.findAddress();
placeLocator.locateMe();
