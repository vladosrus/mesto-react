import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

export default function App() {
  const [state, setState] = React.useState({
    isEditAvatarPopupOpen: false,
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
  });

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([info, initCards]) => {
        setState({
          userName: info.name,
          userDescription: info.about,
          userAvatar: info.avatar,
          cards: initCards
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditAvatarClick() {
    setState({ isEditAvatarPopupOpen: true });
  }
  function handleEditProfileClick() {
    setState({ isEditProfilePopupOpen: true });
  }
  function handleAddPlaceClick() {
    setState({ isAddPlacePopupOpen: true });
  }
  function closeAllPopups() {
    setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
    });
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        userName={state.userName}
        userDescription={state.userDescription}
        userAvatar={state.userAvatar}
        cards={state.cards}
      />
      <Footer />

      {/* Попап редактирования профиля */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={state.isEditProfilePopupOpen}
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
        isOpen={state.isEditAvatarPopupOpen}
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
        isOpen={state.isAddPlacePopupOpen}
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
      <ImagePopup />
    </div>
  );
}
