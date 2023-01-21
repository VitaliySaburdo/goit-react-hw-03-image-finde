import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiService } from './ApiService/ApiService';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadButton } from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImageUrl: null,
    showLoadButton: false
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query)
      await ApiService(query, page).then(data => {
        if (data.hits.length) {
          this.setState(prevState => ({
            items: [...prevState.items, ...data.hits],
            showLoadButton: true
          })); 
        } else {
          toast.warn(`Images ${query} is not found`);
        }
      });
  }

  // setImageUrl(url) {
  //   this.setState({largeImageUrl:url})
  // }

  LoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  formSubmitHendler = ({ query }) => {
    this.setState({ page: 1, query, items: [], showLoadButton: false });
  };

  render() {
    const { items, showLoadButton } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler} />
        <ToastContainer />
        <div className="App">
          <ImageGallery cards={items} />
        </div>
        {showLoadButton && <LoadButton LoadMore = {() => this.LoadMore()} />}
      </div>
    );
  }
}
