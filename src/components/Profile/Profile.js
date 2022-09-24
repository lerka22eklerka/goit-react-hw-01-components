import { PropTypes } from 'prop-types';
import {
  Card,
  AboutUser,
  Avatar,
  Name,
  InfoBlock,
  Stats,
  BlockList,
  Title,
} from './Profile.styled';


export const User = ({ userData: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return (
      <Card>
        <AboutUser>
          <Avatar src={avatar} alt={username} />
          <Name>{username}</Name>
          <InfoBlock>@{tag}</InfoBlock>
          <InfoBlock>{location}</InfoBlock>
        </AboutUser>

        <Stats>
          <BlockList>
            <Title>Followers</Title>
            <Name>{followers}</Name>
          </BlockList>
          <BlockList>
            <Title>Views</Title>
            <Name>{views}</Name>
          </BlockList>
          <BlockList>
            <Title>Likes</Title>
            <Name>{likes}</Name>
          </BlockList>
        </Stats>
      </Card>
    );
};

User.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

