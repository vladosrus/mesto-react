import editProfileImgButton from "../images/editProfileImg-button.svg";

function Main() {
  return (
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
              <button className="element__basket-button" type="button"></button>
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
  );
}

export default Main;
