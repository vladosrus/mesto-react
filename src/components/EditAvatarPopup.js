import { useState, useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const inputRef = useRef();
  const [profileImgLink, setProfileImgLink] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  function handleChange(evt) {
    setProfileImgLink(evt.target.value);
  }

  useEffect(() => {
    setProfileImgLink('');
  }, [props.isOpen]);

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
      >
        <div className="popup__input-container">
          <input
            id="profileImgLink"
            className="popup__input popup__input_named_link"
            type="url"
            placeholder="Ссылка на картинку"
            ref={inputRef}
            value={profileImgLink}
            onChange={handleChange}
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
