import PropTypes from 'prop-types';

export const ImageItem = ({
  largeImageURL,
  previewImage,
  handlerImageClick,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={handlerImageClick}
        className="ImageGalleryItem-image"
        src={previewImage}
        data-original={largeImageURL}
        alt=""
      />
    </li>
  );
};

ImageItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  handlerImageClick: PropTypes.func.isRequired,
};
