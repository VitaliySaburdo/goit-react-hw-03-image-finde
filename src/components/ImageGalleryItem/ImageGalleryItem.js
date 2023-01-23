import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ img, name, onSelect, largeImageUrl }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={img}
        alt={name}
        className="ImageGalleryItem_image"
        onClick={() => onSelect(largeImageUrl, name)}
      />
    </li>
  );
};
