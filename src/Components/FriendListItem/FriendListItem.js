import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      {isOnline === true ? (
        <span className="status active"></span>
      ) : (
        <span className="status"></span>
      )}
      <img
        className="avatar"
        src={avatar}
        alt={{ name } + ' avatar'}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
