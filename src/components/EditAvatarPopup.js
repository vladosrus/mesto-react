import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="profile-image"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <form
        className="popup__form"
        name="image"
        id="imageform"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="popup__input-container">
          <input
            id="profileImgLink"
            className="popup__input popup__input_named_link"
            type="url"
            placeholder="Ссылка на картинку"
            ref={inputRef}
            required
          />
          <span className="popup__input-error profileImgLink-error"></span>
        </div>
        <button className="popup__submit-button" type="submit">
          Сохранить
        </button>
      </form>
    </PopupWithForm>
  );
}
