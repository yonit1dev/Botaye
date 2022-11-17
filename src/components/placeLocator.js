import { UserPosition } from "../models/userPosition";
import { DOM, MODAL, MAP } from "../utils/globals";
import { Map } from "../ui/map";

class PlaceLocator {
  constructor() {
    this.placeLink = DOM.shareInput;
    this.sharePlaceBtn = DOM.shareBtn;

    this.addressField = DOM.findInput;
    this.findPlaceBtn = DOM.findBtn;
    this.locatePlaceBtn = DOM.locateBtn;

    this.sharePlaceBtn.addEventListener(
      "click",
      this.sharePlaceHandler.bind(this)
    );

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
      MAP.marker(location, this.map, "Your Location", "blue");
    } else {
      this.map = MAP.map(DOM.map, location);
      MAP.marker(location, this.map, "Your Location", "blue");
    }
  }

  sharePlaceFormat(coords, address = undefined) {
    const parsedAddress = `${
      location.origin
    }/dist/sharedPlace?address=${encodeURI(address)}&lat=${
      coords.latitude
    }&lng=${coords.longitude}`;
    this.placeLink.value = parsedAddress;
    this.sharePlaceBtn.disabled = false;
  }

  sharePlaceHandler() {
    if (!navigator.clipboard) {
      alert("Your browser doesn't support copying to clipboard");
      this.placeLink.value.select();
    } else {
      navigator.clipboard.writeText(this.placeLink.value);
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
        this.sharePlaceFormat(userPosition);
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
