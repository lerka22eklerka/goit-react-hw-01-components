import { PropTypes } from 'prop-types';
import { FriendCard, Online, Offline, Avatar, Name, } from './FriendListItem.styled';

export const FriendsListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendCard>
      {isOnline ? <Online></Online> : <Offline></Offline>}
        <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
