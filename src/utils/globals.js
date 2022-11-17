import { DOMHelper } from "../models/domHelper";
import { Modal } from "../ui/modal";

const API_KEY = "AIzaSyANQpFE8EDzAaOQKGzc8dVrLi2ShQ1u9MA";
const DOM = new DOMHelper();
const MODAL = new Modal();

const MAP = {
  searchManager: undefined,

  map(DOMElement, location) {
    return new Microsoft.Maps.Map(DOMElement, {
      credentials:
        "ApsPvdlfOBGbjg_12qq7n0rx4I7AoJrTjyUinZvqSAsCOLqRhzhG25CBdub5sHWh",
      center: new Microsoft.Maps.Location(
        location.latitude,
        location.longitude
      ),
      zoom: 17,
    });
  },

  marker(location, map) {
    const center = new Microsoft.Maps.Location(
      location.latitude,
      location.longitude
    );
    const pushpin = new Microsoft.Maps.Pushpin(center, {
      title: "You're Here",
      subTitle: "Location",
      color: "blue",
    });
    map.entities.push(pushpin);

    return pushpin;
  },
};

export { API_KEY, DOM, MODAL, MAP };
