import React from "react";

export default function ImagePopup(props) {
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        props.onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    const thisPopup = document.querySelector(`.popup_named_${props.name}`);
    thisPopup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup_opened")
      ) {
        props.onClose();
      }
    });

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  if (props.isOpen) {
    return (
      <div className="popup popup_named_zoom popup_opened">
        <div className="popup__image-container">
          <img className="popup__image" src={props.card.link} alt="" />
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}
          ></button>
          <p className="popup__caption">{props.card.name}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="popup popup_named_zoom">
        <div className="popup__image-container">
          <img className="popup__image" src="#" alt="" />
          <button className="popup__close-icon" type="button"></button>
          <p className="popup__caption"></p>
        </div>
      </div>
    );
  }
}
