import Card from "./Card";
import editProfileImgButton from "../images/editProfileImg-button.svg";

export default function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={props.userAvatar}
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
          <h1 className="profile__title">{props.userName}</h1>
          <p className="profile__subtitle">{props.userDescription}</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {props.cards &&
            props.cards.map((newCard) => {
              return (
                <Card id={newCard._id} name={newCard.name} link={newCard.link} likes={newCard.likes.length} />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
