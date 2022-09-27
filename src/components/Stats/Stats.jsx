import PropTypes from 'prop-types';
import { Text } from './Stats.styled';

export const Stats = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {total}</Text>
          <Text>Positive feedback: {Math.round(percent)}%</Text>
        </div>
      ) : (
        <Text>There is no feedback</Text>
      )}
    </div>
  );
};

Stats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
