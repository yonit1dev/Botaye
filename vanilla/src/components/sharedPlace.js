class SharedPlace {
  constructor(domObj, mapElement, coords, address) {
    this.DOM = domObj;
    this.MAP = mapElement;

    this.shareNewPlaceBtn = document.querySelector("button");

    this.coords = {
      lat,
      lng,
    };
    this.address;
  }

  collectParams() {}

  renderSharedPlace() {}
}
