import PropTypes from 'prop-types';

export default function FriendList({ friends, children }) {
  return <ul className="friend-list">{children}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.array.isRequired,
};
