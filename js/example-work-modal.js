import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--forestGreen " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={ example.image.desc }
             className="modal__image"
             src={ example.image.src }/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { example.title }
          </h2>
          <p className="modal__description">
            { example.desc }
          </p>
          <a className="color--forestGreen modal__link"
             href={ example.href1 }>
            Report
          </a>
          <p></p>
          <a className="color--forestGreen modal__link"
             href={ example.href2 }>
            GitHub
          </a>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
