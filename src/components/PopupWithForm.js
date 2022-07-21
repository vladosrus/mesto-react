import React from "react";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
      <div className={`popup popup_named_${this.props.name} popup_opened`}>
        <div className="popup__container">
          <h2 className="popup__title">{this.props.title}</h2>
          <button className="popup__close-icon" type="button" onClick={this.props.onClose}></button>
          {this.props.children}
        </div>
      </div>)
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
