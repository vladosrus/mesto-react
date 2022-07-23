import React from "react";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this._escClose = this._handleEscClose.bind(this);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this._escClose);
    this._popup = document.querySelector(`.popup_named_${this.props.name}`);
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup_opened")
      ) {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._escClose);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className={`popup popup_named_${this.props.name} popup_opened`}>
          <div className="popup__container">
            <h2 className="popup__title">{this.props.title}</h2>
            <button
              className="popup__close-icon"
              type="button"
              onClick={this.props.onClose}
            ></button>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className={`popup popup_named_${this.props.name}`}>
          <div className="popup__container">
            <h2 className="popup__title">{this.props.title}</h2>
            <button className="popup__close-icon" type="button"></button>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}
