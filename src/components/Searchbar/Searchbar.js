import { Component } from 'react';
import css from './Searchbar.module.css';

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
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchForm_button} type="submit">
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
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
