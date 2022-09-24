import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  margin-bottom: 40px;
  box-shadow: 3px 5px 12px -3px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`

export const StatsList = styled.ul`
display: flex;
margin-left: 0;
padding-left: 0;
list-style: none;
margin: 0;
`

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 10px;
  gap: 4px;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: ${props => {
    // console.log(props);
    
    if (props.children[0].props.children === '.docx') {
      return `${getRandomHexColor()}`;
    }
    if (props.children[0].props.children === '.pdf') {
      return `${getRandomHexColor()}`;
    }
    if (props.children[0].props.children === '.mp3') {
      return `${getRandomHexColor()}`;
    }
    if (props.children[0].props.children === '.psd') {
      return `${getRandomHexColor()}`;
    }
  }};
`;

export const Label = styled.span`
font-size: 16px;
`
export const StatsValue = styled.span`
  font-size: 18px;
  font-weight: 500;
`