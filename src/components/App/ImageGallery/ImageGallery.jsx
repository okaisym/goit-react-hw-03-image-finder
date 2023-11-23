import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {GalleryList} from './ImageGallery.styled'


export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <GalleryList className="gallery">
     {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tag={image.tags}
          onClick={onImgClick}
        />
      ))}
    </GalleryList>
  );
};
