import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const TitleStyle = styled.th`
  padding: 16px 0;
  font-size: 20px;
  text-align: center;
  color: #fff;
  background-color: #00bcd5;
`;

export const TableString = styled.tr`
  background-color: #fff;
  &:nth-child(2n) {
    background-color: #ecf1f3;
  }
`;
export const TableData = styled.td`
  padding: 16px 0;
  text-align: center;
  box-shadow: 0px 0px 5px #d3d3d3;
  color: #838383;
`;