import React from "react";

export default function PopupWithForm(props) {
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
      <div className={`popup popup_named_${props.name} popup_opened`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}
          ></button>
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`popup popup_named_${props.name}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__close-icon" type="button"></button>
          {props.children}
        </div>
      </div>
    );
  }
}
