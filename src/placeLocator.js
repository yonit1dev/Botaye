import { UserPosition } from "./models/userPosition";
import { DOM, MODAL } from "./utils/globals";
import { Map } from "./ui/map";

class PlaceLocator {
  constructor() {
    this.placeLink = DOM.shareInput;
    this.sharePlaceBtn = DOM.shareBtn;

    this.addressField = DOM.findInput;
    this.findPlaceBtn = DOM.findBtn;
    this.locatePlaceBtn = DOM.locateBtn;

    this.sharePlaceBtn.addEventListener("click", this.sharePlaceHandler);

    this.findPlaceBtn.addEventListener(
      "click",
      this.findPlaceHandler.bind(this)
    );
    this.locatePlaceBtn.addEventListener(
      "click",
      this.locateUserHandler.bind(this)
    );
  }

  placeMarker(location, address = undefined) {
    if (this.map) {
      this.map.render(location);
    } else {
      this.map = new Map(location);
    }
  }

  sharePlaceHandler() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.placeLink.value);
    } else {
      alert("Use a more modern browser to copy link to clipboard");
    }
  }

  findPlaceHandler() {}

  locateUserHandler() {
    MODAL.show();

    navigator.geolocation.getCurrentPosition(
      (userLocation) => {
        MODAL.hide();
        const userPosition = new UserPosition(
          userLocation.coords.latitude,
          userLocation.coords.longitude
        );

        this.placeMarker(userPosition);
      },
      (errorResult) => {
        MODAL.hide();

        alert("Couldn't locate you. Enter your location manually!");

        console.log(new Error(errorResult));
      }
    );
  }
}

const placeLocator = new PlaceLocator();
