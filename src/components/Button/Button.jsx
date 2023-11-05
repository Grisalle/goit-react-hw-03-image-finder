import PropTypes from 'prop-types';

export const Button = ({ handlerLoadMore }) => {
  return (
    <button onClick={() => handlerLoadMore()} className="Button" type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  handlerLoadMore: PropTypes.func.isRequired,
};
