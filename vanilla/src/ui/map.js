import { DOM, MAP } from "../utils/globals";

class Map {
  constructor(location) {
    this.location = {
      lat: location.latitude,
      lng: location.longitude,
    };
    this.render(this.location);
  }

  render(location) {
    if (!MAP) {
      alert("Couldn't reach out to Google Maps API!");
      return;
    }

    this.map = MAP.map(DOM.map, location);

    this.marker = MAP.marker(location, this.map);
  }
}

export { Map };
