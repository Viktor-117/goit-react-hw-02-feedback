import PropTypes from 'prop-types';
import { Button } from './BtnBox.styled';

export const BtnBox = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => {
  return (
    <div style={{ fontSize: '12px', marginBottom: '20px' }}>
      <Button type="button" onClick={onGoodIncrement}>
        Good
      </Button>
      <Button type="button" onClick={onNeutralIncrement}>
        Neutral
      </Button>
      <Button type="button" onClick={onBadIncrement}>
        Bad
      </Button>
    </div>
  );
};
