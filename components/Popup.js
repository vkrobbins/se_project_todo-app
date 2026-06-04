class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

setEventListeners() {  // ← add this method inside Popup
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
  
  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscClose);
  }
}

export default Popup;