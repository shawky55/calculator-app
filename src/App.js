import { useEffect, useState } from 'react';
import './theme/theme-one.css';
import './theme/theme-two.css';
import './theme/theme-three.css';
import './App.css';
import ThemeController from './themeController/ThemeController';
function App() {
  const [theme, setTheme] = useState('one');
  const themeHandler = (themeNumber) => {
    setTheme(themeNumber);
  };
  useEffect(() => {
    document.body.classList.add(`theme-${theme}-main-background`);
    return () => {
      document.body.className = '';
    };
  });
  console.log(theme);
  return (
    <main className="calculator">
      <div className={`theme-${theme}--header-colors calculator--header`}>
        <h1 className="calculator--logo">calc</h1>
        <span className="theme">THEME</span>
        <ThemeController setTheme={themeHandler} />
      </div>
      <div className={`calculator--output theme-${theme}-output-colors`}>
        <div className="previous-output">578</div>
        <div className="current-output">1995.4</div>
      </div>
      <div className={`calc-buttons theme-${theme}-keys-background`}>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>7</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>9</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>8</button>
        <button className={`theme-${theme}-del-btn del-btn`}>DEL</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>4</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>5</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>6</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>+</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>1</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>2</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>3</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>-</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>.</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>0</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>/</button>
        <button className={`numeric-btn theme-${theme}-numeric-btn`}>X</button>
        <button className={`spanTwo theme-${theme}-reset-btn`}>RESET</button>
        <button className={`spanTwo theme-${theme}-equl-btn`}>=</button>
      </div>
    </main>
  );
}

export default App;
