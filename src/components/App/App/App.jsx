import React, { Component } from 'react';
import { SearchBarContainer, Main } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { fetchImages } from 'api';
import { Loader } from '../Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: false });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      const clearQuery = query.split('/').pop();
      try {
        this.setState({ isLoading: true });
        const response = await fetchImages(clearQuery, page);
  
       const newImages = response.data?.hits || [];
  
        if (newImages.length === 0) {
          console.error('No more images available');
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...newImages],
          }));
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
    );
  };


  render() {
    const { images, isLoading } = this.state;

    return (
      <Main>
        <SearchBarContainer>
          <Searchbar onSubmit={this.handleSubmit} />
        </SearchBarContainer>
        {images.length > 0 && <ImageGallery images={images}/>}
        {isLoading && <Loader />} 
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </Main>
    );
  }
}
