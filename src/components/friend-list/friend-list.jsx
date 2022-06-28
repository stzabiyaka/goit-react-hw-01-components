import PropTypes from "prop-types";

export default function FriendList ({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => {
                return (
                    <li key={friend.id} class="item">
                        <span class={friend.isOnline ? 'status status--on' : 'status status--off'}></span>
                        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                        <p class="name">{friend.name}</p>
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