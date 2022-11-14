import { DOM } from "./sharePlace.js";

class Modal {
  constructor() {
    this.modalTemplate = DOM.modalTemplate;
    this.modalContent = DOM.modalTemplateContent;
  }
  show() {
    const modalEl = document.importNode(this.modalTemplate.content, true);
    const contentEl = document.importNode(this.modalContent.content, true);

    this.overlay = modalEl.querySelector(".overlay");
    this.modal = modalEl.querySelector(".modal");

    this.modal.appendChild(contentEl);

    DOM.appendToBody(this.overlay, "afterbegin");
    DOM.appendToBody(this.modal, "afterbegin");
    document.body.style.overflow = "hidden";
  }

  hide() {
    if (this.modal) {
      DOM.removeFromBody(this.overlay);
      DOM.removeFromBody(this.modal);
      document.body.style.overflow = "scroll";

      this.modal = null;
      this.overlay = null;
    } else {
      return;
    }
  }
}

export { Modal };
