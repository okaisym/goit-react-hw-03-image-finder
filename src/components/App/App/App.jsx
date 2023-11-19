import React, { Component } from 'react';
import { SearchBarContainer } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { fetchImages } from 'api';


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  async componentDidMount() {
   this.fetchData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
  
      const response = await fetchImages(query, page);
      const newImages = response.hits;
  
      if (newImages && newImages.length === 0) {
        console.error('No more images available');
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...(newImages || [])],
        }));
      }
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState(
      {
        query,
        page: 1,
        images: [],
      },
      this.fetchData
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      this.fetchData
    );
  };

  handleImgClick = imageURL => {
    this.setState({
      showModal: true,
      selectedImage: imageURL,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedImage: '',
    });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <SearchBarContainer>
          <Searchbar onSubmit={this.handleSubmit} />
        </SearchBarContainer>
        <ImageGallery images={images} onImgClick={this.handleImgClick} />

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}