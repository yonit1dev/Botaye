import { UserPosition } from "./models/userPosition";
import { DOM, MODAL, MAP } from "./utils/globals";
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

  placeMarker(location) {
    if (this.map) {
      MAP.map(DOM.map, location);
      MAP.marker(location, this.map);
    } else {
      this.map = MAP.map(DOM.map, location);
      MAP.marker(location, this.map);
    }
  }

  sharePlaceHandler() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.placeLink.value);
    } else {
      alert("Use a more modern browser to copy link to clipboard");
    }
  }

  findPlaceHandler() {
    const address = DOM.findInput.value;
    MODAL.show();
    if (address && address.trim().length > 0) {
      MAP.geocoder(address, this.map);
      MODAL.hide();
    } else {
      MODAL.hide();
      alert("Enter a valid address");
      return;
    }
  }

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

export { PlaceLocator };
