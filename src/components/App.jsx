import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      </div>
    )
}
};
