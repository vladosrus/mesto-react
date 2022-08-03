import Card from "./Card";
import editProfileImgButton from "../images/editProfileImg-button.svg";
import React from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Фото профиля"
            className="profile__avatar"
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
            <img
              src={editProfileImgButton}
              alt="Карандаш"
              className="profile__editImg-button"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          />
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {props.cards &&
            props.cards.map((newCard) => {
              return (
                <Card
                  card={newCard}
                  key={newCard._id}
                  name={newCard.name}
                  link={newCard.link}
                  likes={newCard.likes.length}
                  onCardClick={props.onCardClick}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
