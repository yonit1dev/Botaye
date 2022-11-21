import { UserPosition } from "../models/userPosition";

class PlaceLocator {
  constructor(domObject, modal, mapElement) {
    this.DOM = domObject;
    this.MODAL = modal;
    this.MAP = mapElement;

    this.placeLink = this.DOM.shareInput;
    this.sharePlaceBtn = this.DOM.shareBtn;

    this.addressField = this.DOM.findInput;
    this.findPlaceBtn = this.DOM.findBtn;
    this.locatePlaceBtn = this.DOM.locateBtn;

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
      this.MAP.map(this.DOM.map, location);
      this.MAP.marker(location, this.map, "Your Location", "blue");
    } else {
      this.map = this.MAP.map(this.DOM.map, location);
      this.MAP.marker(location, this.map, "Your Location", "blue");
    }
  }

  sharePlaceFormat(coords = undefined, address = undefined) {
    const parsedAddress = `${
      location.origin
    }/dist/vanilla/sharedPlace?address=${encodeURI(address)}&lat=${
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
    const address = this.DOM.findInput.value;
    this.MODAL.show();
    if (address && address.trim().length > 0) {
      this.MAP.geocoder(address, this.map);
      this.sharePlaceFormat({ address: address });
      this.MODAL.hide();
    } else {
      this.MODAL.hide();
      alert("Enter a valid address");
      return;
    }
  }

  locateUserHandler() {
    // fetch("http://localhost:7070/", {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((value) => {
    //     console.log(value);
    //   });

    this.MODAL.show();

    navigator.geolocation.getCurrentPosition(
      (userLocation) => {
        this.MODAL.hide();
        const userPosition = new UserPosition(
          userLocation.coords.latitude,
          userLocation.coords.longitude
        );

        this.placeMarker(userPosition);
        this.sharePlaceFormat(userPosition);
      },
      (errorResult) => {
        this.MODAL.hide();

        alert("Couldn't locate you. Enter your location manually!");

        console.log(new Error(errorResult));
      }
    );
  }
}

export { PlaceLocator };
