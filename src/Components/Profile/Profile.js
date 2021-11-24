import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username + 'avatar'} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{'@' + tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        {Object.keys(stats).map(key => (
          <li key={key} className={s.item}>
            <span className={s.label}>{key}</span>
            <span className={s.quantity}>{stats[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
