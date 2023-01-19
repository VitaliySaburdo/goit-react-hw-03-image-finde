import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";

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
        <Searchbar onSubmit={this.formSubmitHendler}/>
      </div>
    )
}
};
