import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component{
  state = {
  query: '',
}

  formSubmitHendler = ({ query}) => {
    this.setState({ query: query });
    
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler}/>
      </div>
    )
}
};
