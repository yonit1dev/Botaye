class DOMHelper {
  constructor() {
    this.map = document.getElementById("map");

    this.shareInput = document.getElementById("share-link");
    this.shareBtn = document.getElementById("share-place");

    this.findInput = document.getElementById("find-input");
    this.findBtn = document.getElementById("find-btn");

    this.locateBtn = document.getElementById("locate-btn");
  }

  appendElement(parentElId, elementId) {
    const parentEl = document.getElementById(parentElId);
    const element = document.getElementById(elementId);

    parentEl.append(element);
  }
}

export default DOMHelper;
