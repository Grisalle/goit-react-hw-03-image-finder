import PropTypes from 'prop-types';
import css from './Search.module.css';

export const Search = ({ onChange, value }) => {
  return <input className={css.search} value={value} onChange={onChange} />;
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
