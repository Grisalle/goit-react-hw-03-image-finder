import { Component } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    value: '',
    lastRequest: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return Notify.failure('Please, write something');
    } else if (
      this.state.value.toLowerCase().trim() === this.state.lastRequest
    ) {
      return Notify.failure('This is current request');
    }

    this.props.onSubmit(this.state.value.toLowerCase().trim());
    this.setState({
      value: '',
      lastRequest: this.state.value.toLowerCase().trim(),
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.onChange}
            className="SearchForm-input"
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
