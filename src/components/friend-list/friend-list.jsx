import PropTypes from "prop-types";
import css from "./friend-list.module.css";

export function FriendList ({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline,avatar, name }) => {
                return (
                    <li key={id} className={css.item}>
                        <span className={isOnline ? css.statusOn : css.statusOff}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
}