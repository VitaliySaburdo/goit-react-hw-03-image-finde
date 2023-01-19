export const ImageGalleryItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
    </li>
  );
};
