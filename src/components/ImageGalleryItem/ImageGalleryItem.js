export const ImageGalleryItem = ({ img }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={img} alt="" className="ImageGalleryItem_image" />
    </li>
  );
};
