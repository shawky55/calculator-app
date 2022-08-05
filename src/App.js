import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('theme1');
  });
  return (
    <>
      <main className="calculator">
        <div className="calculator--header calculator--header-colors">
          <h1 className="calculator--logo">calc</h1>
          <div className="calculator--theme">
            <div className="theme">THEME</div>
          </div>
        </div>
        <div className="calculator--output theme-one-output-colors">
          <div className="previous-output">578</div>
          <div className="current-output">1995.4</div>
        </div>
        <div className="calc-buttons theme-one-keys-background">
          <button className="  numeric-btn theme-one-numeric-btn">7</button>
          <button className=" numeric-btn theme-one-numeric-btn">8</button>
          <button className=" numeric-btn theme-one-numeric-btn">9</button>
          <button className="theme-one-del-btn del-btn">DEL</button>
          <button className=" numeric-btn theme-one-numeric-btn">4</button>
          <button className=" numeric-btn theme-one-numeric-btn">5</button>
          <button className=" numeric-btn theme-one-numeric-btn">6</button>
          <button className=" numeric-btn theme-one-numeric-btn">+</button>
          <button className=" numeric-btn theme-one-numeric-btn">1</button>
          <button className=" numeric-btn theme-one-numeric-btn">2</button>
          <button className=" numeric-btn theme-one-numeric-btn">3</button>
          <button className=" numeric-btn theme-one-numeric-btn">-</button>
          <button className=" numeric-btn theme-one-numeric-btn">.</button>
          <button className=" numeric-btn theme-one-numeric-btn">0</button>
          <button className=" numeric-btn theme-one-numeric-btn">/</button>
          <button className=" numeric-btn theme-one-numeric-btn">X</button>
          <button className="spanTwo theme-one-reset-btn">RESET</button>
          <button className="spanTwo theme-one-equl-btn">=</button>
        </div>
      </main>
    </>
  );
}

export default App;
