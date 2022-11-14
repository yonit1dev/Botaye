import { DOM } from "./sharePlace.js";

class Map {
  constructor(location) {
    this.location = {
      lat: location.latitude,
      lng: location.longitude,
    };
    this.render(this.location);
  }

  render(location) {
    if (!google) {
      alert("Couldn't reach out to Google Maps SDK!");
      return;
    }

    this.map = new google.maps.Map(DOM.map, {
      center: location,
      zoom: 16,
    });

    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
    });
  }
}

export { Map };
