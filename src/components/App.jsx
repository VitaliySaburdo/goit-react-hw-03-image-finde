import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiService } from './ApiService/ApiService';
import { toast } from 'react-toastify';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImageUrl: null,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query)
      await ApiService(query, page).then(
        data => {
          if (data.hits.length) {
            this.setState({ items: data.hits })
          } else { toast.warn(`Images ${query} is not found`) };
        } 
      );
  }

  setImageUrl(url) {
    this.setState({largeImageUrl:url})
  }

  LoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  formSubmitHendler = ({ query }) => {
    this.setState({ page: 1, query, items: [] });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler} />
        <ToastContainer />

        <button onClick={this.LoadMore} className="Button" type="button">
          Load more
        </button>
      </div>
    );
  }
}
