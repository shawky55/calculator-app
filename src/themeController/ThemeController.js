// @flow
import { useState } from 'react';
import classes from './themeController.module.css';
const ThemeController = ({ setTheme, color }) => {
  //   const [active, setActive] = useState('1');

  const handleClick = (id) => {
    setTheme(id);
    // setActive(id);
    console.log(id);
  };
  return (
    <div className={classes.themeController}>
      <div className="theme-number">1</div>
      <div className="theme-number">2</div>
      <div className="theme-number">3</div>
      <div className={classes.themeButtons}>
        <fieldset id="themeButtons" className={classes.themeButtons}>
          <input
            id={'one'}
            type="radio"
            className={classes.themeButton}
            name="themeButtons"
            onChange={(event) => handleClick(event.currentTarget.id)}
          />
          <input
            id={'two'}
            type="radio"
            className={classes.themeButton}
            name="themeButtons"
            onChange={(event) => handleClick(event.currentTarget.id)}
          />
          <input
            id={'three'}
            type="radio"
            className={classes.themeButton}
            name="themeButtons"
            onChange={(event) => handleClick(event.currentTarget.id)}
          />
        </fieldset>
      </div>
    </div>
  );

  //   <div className={active === '3' ? classes.activeTheme : null}>
  //     3
  //   </div>;
  //
};
export default ThemeController;
