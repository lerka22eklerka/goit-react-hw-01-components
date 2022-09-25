import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 300px;
  height: 70px;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-shadow: 0px 0px 5px rgba(33, 33, 33, 0.2);
  background-color: #fff;
`;

export const Online = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
  background-color: #00ff00;
`;

export const Offline = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
  background-color: #ff0000;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #333;
`;