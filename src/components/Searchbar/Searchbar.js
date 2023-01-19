import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return alert('Please, enter image name.');
    }
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleQueryChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.handleQueryChange}
            value={this.state.value}
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
        </form>
      </header>
    );
  }
}
