import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery'

export class App extends Component{
  state = {
  query: '',
}

  formSubmitHendler = ({ value}) => {
    this.setState({ query: value });
    
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler} />
        <ToastContainer />
        <ImageGallery query={this.state.query } />
      </div>
    )
}
};
