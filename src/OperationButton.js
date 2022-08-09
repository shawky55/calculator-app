import './App.css';
import { calcAction } from './App';
const OperationButton = ({ operation, theme, dispatch }) => {
  return (
    <button
      className={`numeric-btn theme-${theme}-numeric-btn`}
      onClick={() =>
        dispatch({
          type: calcAction.CHOOSE_OPERATION,
          payload: { operation: operation },
        })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
