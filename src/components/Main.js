import React from "react";
import editProfileImgButton from "../images/editProfileImg-button.svg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={this.props.userAvatar} alt="Фото профиля" className="profile__avatar" />
            <div className="profile__avatar-overlay" onClick={this.props.onEditAvatar}>
              <img
                src={editProfileImgButton}
                alt="Карандаш"
                className="profile__editImg-button"
              />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{this.props.userName}</h1>
            <p className="profile__subtitle">{this.props.userDescription}</p>
            <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}></button>
          </div>
          <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
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
}