import PropTypes from 'prop-types';
import { Button, ListItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul
      style={{
        display: 'flex',
        fontSize: '12px',
        marginBottom: '20px',
        listStyle: 'none',
      }}
    >
      {options.map((option, idx) => {
        return (
          <ListItem key={idx}>
            <Button type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
