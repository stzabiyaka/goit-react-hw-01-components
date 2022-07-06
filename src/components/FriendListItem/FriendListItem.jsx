import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <ListItem>
      <Status statusIsOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
