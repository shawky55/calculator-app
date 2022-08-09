import { calcAction } from './App';
import './App.css';

const DigitButton = ({ digit, dispatch, theme }) => {
  return (
    <button
      className={`numeric-btn theme-${theme}-numeric-btn`}
      onClick={() =>  dispatch({ type: calcAction.ADD_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
};
export default DigitButton;
