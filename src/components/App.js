import Header from "./Header";
import editProfileImgButton from "../images/editProfileImg-button.svg";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img src="#" alt="Фото профиля" className="profile__avatar" />
            <div className="profile__avatar-overlay">
              <img
                src={editProfileImgButton}
                alt="Карандаш"
                className="profile__editImg-button"
              />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button className="profile__edit-button" type="button"></button>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            <template className="card">
              <article className="element">
                <img className="element__image" src="#" alt="" />
                <button
                  className="element__basket-button"
                  type="button"
                ></button>
                <div className="element__caption">
                  <h2 className="element__title"></h2>
                  <div className="element__like-container">
                    <button
                      className="element__like-button"
                      type="button"
                      id="like"
                    ></button>
                    <p className="element__like-count"></p>
                  </div>
                </div>
              </article>
            </template>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>
      {/* Попап редактирования профиля */}
      <div className="popup popup_named_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-icon" type="button"></button>
          <form
            className="popup__form"
            name="profile"
            id="profileform"
            novalidate
          >
            <div className="popup__input-container">
              <input
                id="name"
                className="popup__input popup__input_named_name"
                type="text"
                placeholder="Ваше имя"
                required
                minlength="2"
                maxlength="40"
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
                minlength="2"
                maxlength="200"
              />
              <span className="popup__input-error job-error"></span>
            </div>
            <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* Попап обновления фото профиля */}
      <div className="popup popup_named_profile-image">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__close-icon" type="button"></button>
          <form className="popup__form" name="image" id="imageform" novalidate>
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
        </div>
      </div>
      {/* Попап добавления карточек */}
      <div className="popup popup_named_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое Место</h2>
          <button className="popup__close-icon" type="button"></button>
          <form className="popup__form" name="card" id="cardform" novalidate>
            <div className="popup__input-container">
              <input
                id="imgname"
                className="popup__input popup__input_named_imgname"
                type="text"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
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
        </div>
      </div>
      {/* Попап удаления карточки */}
      <div className="popup popup_named_delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__close-icon" type="button"></button>
          <form
            className="popup__form"
            name="deletecard"
            id="deletecardform"
            novalidate
          >
            <button className="popup__submit-button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
      {/* Попап с увеличенной фотографией */}
      <div className="popup popup_named_zoom">
        <div className="popup__image-container">
          <img className="popup__image" src="#" alt="" />
          <button className="popup__close-icon" type="button"></button>
          <p className="popup__caption"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
