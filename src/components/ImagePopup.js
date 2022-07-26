import React from "react";

export default function ImagePopup(props) {
  React.useEffect(() => {
    props.onEscClick(props, props.isOpen);
  }, [props.isOpen]);

  if (props.isOpen) {
    return (
      <div className="popup popup_named_zoom popup_opened">
        <div className="popup__image-container">
          <img
            className="popup__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}
          />
          <p className="popup__caption">{props.card.name}</p>
        </div>
      </div>
    );
  }
}
