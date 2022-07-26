import React, { useRef } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [state, setState] = React.useState({
    isEditAvatarPopupOpen: false,
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
  });
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* Попап редактирования профиля */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form"
          name="profile"
          id="profileform"
          noValidate
        >
          <div className="popup__input-container">
            <input
              id="name"
              className="popup__input popup__input_named_name"
              type="text"
              placeholder="Ваше имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error name-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="job"
              className="popup__input popup__input_named_job"
              type="text"
              placeholder="Расскажите о себе"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error job-error"></span>
          </div>
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      {/* Попап обновления фото профиля */}
      <PopupWithForm
        name="profile-image"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form" name="image" id="imageform" noValidate>
          <div className="popup__input-container">
            <input
              id="profileImgLink"
              className="popup__input popup__input_named_link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error profileImgLink-error"></span>
          </div>
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      {/* Попап добавления карточек */}
      <PopupWithForm
        name="card"
        title="Новое Место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form" name="card" id="cardform" noValidate>
          <div className="popup__input-container">
            <input
              id="imgname"
              className="popup__input popup__input_named_imgname"
              type="text"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error imgname-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="cardImgLink"
              className="popup__input popup__input_named_link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error cardImgLink-error"></span>
          </div>
          <button className="popup__submit-button" type="submit">
            Создать
          </button>
        </form>
      </PopupWithForm>

      {/* Попап удаления карточки */}
      <PopupWithForm name="delete" title="Вы уверены?">
        <form
          className="popup__form"
          name="deletecard"
          id="deletecardform"
          noValidate
        >
          <button className="popup__submit-button" type="submit">
            Да
          </button>
        </form>
      </PopupWithForm>

      {/* Попап с увеличенной фотографией */}
      <ImagePopup
        name="zoom"
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}
