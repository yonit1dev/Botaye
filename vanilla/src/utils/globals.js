import { DOMHelper } from "../models/domHelper";
import { Modal } from "../ui/modal";

const API_KEY = "AIzaSyANQpFE8EDzAaOQKGzc8dVrLi2ShQ1u9MA";
const DOM = new DOMHelper();
const MODAL = new Modal();

const MAP = {
  map(DOMElement, location) {
    return new Microsoft.Maps.Map(DOMElement, {
      credentials:
        "ApsPvdlfOBGbjg_12qq7n0rx4I7AoJrTjyUinZvqSAsCOLqRhzhG25CBdub5sHWh",
      center: new Microsoft.Maps.Location(
        location.latitude,
        location.longitude
      ),
      zoom: 12,
    });
  },

  marker(location, map, searchedLocation = undefined, markerColor) {
    const center = new Microsoft.Maps.Location(
      location.latitude,
      location.longitude
    );
    const pushpin = new Microsoft.Maps.Pushpin(center, {
      title: searchedLocation,
      subTitle: "Location",
      color: markerColor,
    });
    map.entities.push(pushpin);

    return pushpin;
  },

  geocoder(address = undefined, map = undefined) {
    if (!this.searchManager) {
      Microsoft.Maps.loadModule("Microsoft.Maps.Search", () => {
        this.searchManager = new Microsoft.Maps.Search.SearchManager(map);
        this.geocoder(address, map);
      });
    } else {
      let request = {
        where: address,
        callback: (result) => {
          this.marker(result.results[0].location, map, address, "green");
        },
      };

      this.searchManager.geocode(request);
    }
  },
};

export { API_KEY, DOM, MODAL, MAP };
