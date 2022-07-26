export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }
  
  return (
    <article className="element card">
      <img className="element__image" src={props.link} alt="" onClick={handleClick}/>
      <button className="element__basket-button" type="button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-button"
            type="button"
            id="like"
          ></button>
          <p className="element__like-count">{props.likes}</p>
        </div>
      </div>
    </article>
  );
}
