import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery-item">
        <li>{this.props.query}</li>
      </ul>
    );
  }
}
