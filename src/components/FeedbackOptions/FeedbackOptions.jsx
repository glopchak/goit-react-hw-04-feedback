import PropTypes from 'prop-types';
import { Controls, ControlsItem, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <Controls>
{options.map(option => {
        return (
          <ControlsItem key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </ControlsItem>
        );
      })}
      </Controls>
    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };