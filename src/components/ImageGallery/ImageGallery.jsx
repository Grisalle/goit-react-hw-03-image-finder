import { Component } from 'react';
import { ImageItem } from './ImageItem';
import PropTypes from 'prop-types';

export class ImageGalery extends Component {
  state = {};
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.items.map(item => (
          <ImageItem
            handlerImageClick={this.props.handlerImageClick}
            key={item.id}
            largeImageURL={item.largeImageURL}
            previewImage={item.webformatURL}
          />
        ))}
      </ul>
    );
  }
}

ImageGalery.propTypes = {
  handlerImageClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
