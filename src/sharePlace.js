import { UserPosition, DOMHelper } from "./helpers.js";
import { Modal } from "./modal.js";
import { Map } from "./map.js";
import { translateCoords } from "./location.js";

// global dom object to help with dom manipulations
const DOM = new DOMHelper();

class PlaceLocator {
  constructor() {
    this.address = DOM.findInput;
    this.findPlace = DOM.findBtn;
    this.locateBtn = DOM.locateBtn;

    this.findPlace.addEventListener(
      "click",
      this.findAddressHandler.bind(this)
    );

    this.locateBtn.addEventListener("click", this.locateMeHandler.bind(this));
  }

  pinPointLocation(location) {
    if (this.map) {
      this.map.render(location);
    } else {
      this.map = new Map(location);
    }
  }

  findAddressHandler() {
    const addressEntered = this.address.value;

    if (!addressEntered || addressEntered.trim().length === 0) {
      alert("Invalid address entered!");
      return;
    }

    const loadingModal = new Modal();
    loadingModal.show();

    translateCoords(addressEntered);
  }

  locateMeHandler() {
    const loadingModal = new Modal();
    loadingModal.show();

    navigator.geolocation.getCurrentPosition(
      (foundLocation) => {
        loadingModal.hide();

        const userPosition = new UserPosition(
          foundLocation.coords.latitude,
          foundLocation.coords.longitude
        );

        this.pinPointLocation(userPosition);
      },
      (errorResult) => {
        loadingModal.hide();

        alert("Couldn't locate you. Enter your location manually!");
        console.log(errorResult);
      }
    );
  }
}

const placeLocator = new PlaceLocator();

export { DOM };
