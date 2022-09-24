import styled from "styled-components";

export const Card = styled.div`
  max-width: 300px;
  padding: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 3px 5px 12px -3px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  border: 3px solid rgba(54, 33, 33, 0.038);
  border-radius: 6px;
`;
export const AboutUser = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  max-width: 300px;
  margin-bottom: 0;
`;
export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  border: #ccc solid 1px;
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
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
  font-size: 14px;
  color: #8c8c8c;
`;