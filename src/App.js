import { useEffect, useReducer, useState } from 'react';
import './theme/theme-one.css';
import './theme/theme-two.css';
import './theme/theme-three.css';
import DigitButton from './Buttons/DigitButton';
import OperationButton from './Buttons/OperationButton';
import './App.css';
import ThemeController from './themeController/ThemeController';
const initialState = {
  currentOperation: '',
  previousOperation: '',
  operation: '',
  // overwrite: false,
};
export const calcAction = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose_operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate',
};
function App() {
  const getTheme = () => {
    return localStorage.getItem('CurrentTheme') || 'one';
  };

  const calcReducer = (state, { type, payload }) => {
    switch (type) {
      case calcAction.ADD_DIGIT:
        if (payload.digit === '.' && state.currentOperation.includes('.')) {
          return state;
        }
        if (payload.digit === '0' && state.currentOperation === '0') {
          return state;
        }
        if (state.overwrite) {
          return {
            ...state,
            currentOperation: payload.digit,
            overwrite: false,
          };
        }
        return {
          ...state,
          currentOperation: `${state.currentOperation || ''}${payload.digit}`,
        };
      case calcAction.CHOOSE_OPERATION:
        if (!state.currentOperation && !state.previousOperation) {
          return state;
        }
        if (!state.previousOperation) {
          return {
            ...state,
            previousOperation: state.currentOperation,
            operation: `${payload.operation}`,
            currentOperation: '',
          };
        }
        if (!state.currentOperation) {
          return {
            ...state,
            operation: payload.operation,
          };
        }
        return {
          ...state,
          previousOperation: evaluate(state),
          operation: payload.operation,
          currentOperation: '',
        };
      case calcAction.CLEAR:
        return initialState;

      case calcAction.EVALUATE:
        if (
          !state.previousOperation ||
          !state.currentOperation ||
          !state.operation
        ) {
          return state;
        }
        return {
          ...state,
          previousOperation: '',
          operation: '',
          currentOperation: evaluate(state),
          overwrite: true,
        };
      case calcAction.DELETE_DIGIT:
        if (state.overwrite) {
          return {
            currentOperation: '',
            previousOperation: '',
            operation: '',
            overwrite: false,
          };
        }
        if (!state.currentOperation) return state;
        if (state.currentOperation === 1) {
          return {
            ...state,
            currentOperation: '',
          };
        }
        return {
          ...state,
          currentOperation: state.currentOperation.slice(0, -1),
        };
      default:
    }
  };
  const evaluate = ({ previousOperation, operation, currentOperation }) => {
    const previous = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);
    let result = '';
    if (isNaN(previous) || isNaN(current)) return result;
    switch (operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case 'x':
        result = previous * current;
        break;
      case '/':
        if (current === 0) {
          result = 'Cannot divide by zero';
        } else {
          result = previous / current;
        }
        break;
      default:
    }

    return result.toString();
  };
  const [{ currentOperation, previousOperation, operation }, dispatch] =
    useReducer(calcReducer, initialState);
  const [theme, setTheme] = useState(getTheme());
  const themeHandler = (themeNumber) => {
    setTheme(themeNumber);
  };
  useEffect(() => {
    document.body.classList.add(`theme-${theme}-main-background`);
    localStorage.setItem('CurrentTheme', theme);
    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <main className="calculator">
      <div className={`theme-${theme}--header-colors calculator--header`}>
        <h1 className="calculator--logo">calc</h1>
        <span className="theme">THEME</span>
        <ThemeController setTheme={themeHandler} theme={theme} />
      </div>
      <div className={`calculator--output theme-${theme}-output-colors`}>
        <div className="previous-output">
          {previousOperation} {operation}
        </div>
        <div className="current-output">{currentOperation}</div>
      </div>
      <div className={`calc-buttons theme-${theme}-keys-background`}>
        <DigitButton digit={7} dispatch={dispatch} theme={theme} />
        <DigitButton digit={8} dispatch={dispatch} theme={theme} />
        <DigitButton digit={9} dispatch={dispatch} theme={theme} />
        <button
          className={`theme-${theme}-del-btn del-btn`}
          onClick={() => dispatch({ type: calcAction.DELETE_DIGIT })}
        >
          DEL
        </button>
        <DigitButton digit={4} dispatch={dispatch} theme={theme} />
        <DigitButton digit={5} dispatch={dispatch} theme={theme} />
        <DigitButton digit={6} dispatch={dispatch} theme={theme} />
        <OperationButton theme={theme} operation={'+'} dispatch={dispatch} />
        <DigitButton digit={1} dispatch={dispatch} theme={theme} />
        <DigitButton digit={2} dispatch={dispatch} theme={theme} />
        <DigitButton digit={3} dispatch={dispatch} theme={theme} />
        <OperationButton theme={theme} operation={'-'} dispatch={dispatch} />
        <DigitButton digit={'.'} dispatch={dispatch} theme={theme} />
        <DigitButton digit={0} dispatch={dispatch} theme={theme} />
        <OperationButton theme={theme} operation={'/'} dispatch={dispatch} />
        <OperationButton theme={theme} operation={'x'} dispatch={dispatch} />
        <button
          className={`spanTwo theme-${theme}-reset-btn lastrowButton`}
          onClick={() => {
            dispatch({ type: calcAction.CLEAR });
          }}
        >
          RESET
        </button>
        <button
          className={`spanTwo theme-${theme}-equl-btn lastrowButton`}
          onClick={() => dispatch({ type: calcAction.EVALUATE })}
        >
          =
        </button>
      </div>
    </main>
  );
}

export default App;
