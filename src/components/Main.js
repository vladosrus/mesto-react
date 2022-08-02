import Card from "./Card";
import editProfileImgButton from "../images/editProfileImg-button.svg";
import React from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const current = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initCards) => {
        setCards(initCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    //Проверка, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === current._id);

    //Отправляем запрос в API, получаем обновлённые данные карточки, находим нужную карточку и обновляем
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    //Отправляем запрос в API, получаем обновлённые данные карточки, находим нужную карточку и обновляем
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => (c._id !== card._id)));
    });
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={current.avatar}
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
          <h1 className="profile__title">{current.name}</h1>
          <p className="profile__subtitle">{current.about}</p>
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
          {cards &&
            cards.map((newCard) => {
              return (
                <Card
                  card={newCard}
                  key={newCard._id}
                  name={newCard.name}
                  link={newCard.link}
                  likes={newCard.likes.length}
                  onCardClick={props.onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
