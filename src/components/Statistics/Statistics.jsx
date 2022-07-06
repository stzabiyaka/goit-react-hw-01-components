import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utilities/random-hex-colors';
import {
  StatisticsSection,
  Title,
  StatsList,
  StatsListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ stats, title }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsListItem key={id} bgColor={getRandomHexColor()}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatsListItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
