import { DOMHelper } from "./models/domHelper.js";
import { UserPosition } from "./models/userPosition.js";
import { Modal } from "./ui/modal.js";
import { Map } from "./ui/map.js";
import { translateCoords, translateLocation } from "./utils/location.js";

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

  pinPointLocation(location, address) {
    if (this.map) {
      this.map.render(location);
    } else {
      this.map = new Map(location);
    }
  }

  findAddressHandler() {
    // Requires billing to be setup in google maps platform.
    // const addressEntered = this.address.value;
    // if (!addressEntered || addressEntered.trim().length === 0) {
    //   alert("Invalid address entered!");
    //   return;
    // }
    // translateLocation(addressEntered);
  }

  locateMeHandler() {
    const loadingModal = new Modal();
    loadingModal.show();

    navigator.geolocation.getCurrentPosition(
      (foundLocation) => {
        const userPosition = new UserPosition(
          foundLocation.coords.latitude,
          foundLocation.coords.longitude
        );

        const address = translateCoords(userPosition);
        loadingModal.hide();

        this.pinPointLocation(userPosition, address);
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
