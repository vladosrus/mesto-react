export default function ImagePopup() {
  return (
    <div className="popup popup_named_zoom">
      <div className="popup__image-container">
        <img className="popup__image" src="#" alt="" />
        <button className="popup__close-icon" type="button"></button>
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}
