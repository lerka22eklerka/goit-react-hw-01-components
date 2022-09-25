import { PropTypes } from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  StatsItem,
  Label,
  StatsValue,
} from './Statistics.styled';


export const Statistics = ({ title, stats}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

          <StatsList>
              {stats.map(({ id, label, percentage }) => (
                  <StatsItem key={id}>
                      <Label>{label}</Label>
                      <StatsValue>{percentage}%</StatsValue>
                  </StatsItem>
              ))}        
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};