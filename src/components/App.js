import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditPropilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((currentUserInfo) => {
        setCurrentUser(currentUserInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api
      .changeProfileInfo(data)
      .then((result) => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleUpdateAvatar(data) {
    api
      .changeProfileImg(data)
      .then((result) => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
    </CurrentUserContext.Provider>
  );
}
