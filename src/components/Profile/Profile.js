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
          <InfoBlock>{tag}</InfoBlock>
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