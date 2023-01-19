import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Please, enter image name.');
    }
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleQueryChange}
            value={this.state.query}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
