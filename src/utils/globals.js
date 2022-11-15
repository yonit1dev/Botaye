import { DOMHelper } from "../models/domHelper";
import { Modal } from "../ui/modal";

const API_KEY = "AIzaSyANQpFE8EDzAaOQKGzc8dVrLi2ShQ1u9MA";
const DOM = new DOMHelper();
const MODAL = new Modal();

const MAP = {
  map(DOMElement, location) {
    return new google.maps.Map(DOMElement, {
      center: location,
      zoom: 17,
    });
  },
  marker(location, map) {
    return new google.maps.Marker({
      position: location,
      map: map,
    });
  },
  geocoder() {
    return new google.maps.Geocoder();
  },
};

export { API_KEY, DOM, MODAL, MAP };
