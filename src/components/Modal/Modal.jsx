import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onEsc);
  };

  onEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.handlerCloseModal();
  };

  onOverlayClick = ({ target }) => {
    if (!target.classList.contains('Overlay')) {
      return;
    }
    this.props.handlerCloseModal();
  };

  render() {
    return (
      <div className="Overlay" onClick={this.onOverlayClick}>
        <div className="Modal">
          <img src={this.props.selectedIMG} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  selectedIMG: PropTypes.string.isRequired,
  handlerCloseModal: PropTypes.func.isRequired,
};
