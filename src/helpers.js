class UserPosition {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

class DOMHelper {
  constructor() {
    this.modalTemplate = document.getElementById("modal-template");
    this.modalTemplateContent = document.getElementById(
      "modal-template-content"
    );

    this.map = document.getElementById("map");

    this.shareInput = document.getElementById("share-link");
    this.shareBtn = document.getElementById("share-place");

    this.findInput = document.getElementById("find-input");
    this.findBtn = document.getElementById("find-btn");

    this.locateBtn = document.getElementById("locate-btn");
  }

  appendToBody(element, position) {
    document.body.insertAdjacentElement(position, element);
  }

  removeFromBody(element) {
    document.body.removeChild(element);
  }
}

export { UserPosition, DOMHelper };
