import { Img } from './ImageGalleryItem.styled';
import { ModalWindow } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { image, largeImageURL, tag } = this.props;

    return (
      <li className="gallery-item">
        <Img src={image} alt={tag} width="300px" onClick={this.openModal} />
        <ModalWindow
          isOpen={isOpen}
          onClose={this.onClose}
          largeImageURL={largeImageURL}
          tags={tag}
        />
             </li>
    );
  }
}
