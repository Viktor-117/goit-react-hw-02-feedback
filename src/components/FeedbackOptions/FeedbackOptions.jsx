import PropTypes from 'prop-types';
import { Button, ListItem, List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button
              type="button"
              onClick={() => {
                onLeaveFeedback(option.toLowerCase());
              }}
            >
              {option}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
