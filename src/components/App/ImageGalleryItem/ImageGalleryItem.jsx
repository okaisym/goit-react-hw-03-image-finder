import {GallItem, Img} from './ImageGalleryItem.styled'

export const ImageGalleryItem =  ({ image, onClick }) => {
    return (
      <GallItem className="gallery-item" onClick={() => onClick(image.largeImageURL)}>
        <Img src={image.webformatURL} alt={image.type} width='300px'/>
      </GallItem>
    );
  };