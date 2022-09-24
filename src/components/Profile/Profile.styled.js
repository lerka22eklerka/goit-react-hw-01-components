import styled from "styled-components";

export const Card = styled.div`
  padding: 100px;
  background-color: lightblue;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;
export const AboutUser = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border: 3px solid rgba(54, 33, 33, 0.038);
  border-radius: 6px;
  max-width: 300px;
  margin-bottom: 30px;
  background-color: #fff;
`;
export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  text-align: center;
  margin: 0;
  color: black;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const InfoBlock = styled.p`
  text-align: center;
  font-size: 16px;
  color: #8c8c8c;
  margin: 0;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  margin: 0;
  background-color: #f3f6f9;
  border-radius: 0 0 4px 4px;
  width: 400px;
`;
export const BlockList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #e7ecf2;
  width: 100px;
`;
export const Title = styled.span`
  font-size: 16px;
  color: #8c8c8c;
`;