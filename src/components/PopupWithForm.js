import React from "react";

export default function PopupWithForm(props) {
  if (props.isOpen) {
    return (
      <div className={`popup popup_named_${props.name} popup_opened`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}
          />
          {props.children}
        </div>
      </div>
    );
  }
}
