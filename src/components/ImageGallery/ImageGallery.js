import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ cards }) => {
  return (
    <ul className="ImageGallery">
      {cards.map(card => (
        <ImageGalleryItem key={card.id} img={card.webformatURL} />
      ))}
    </ul>
  );
};
