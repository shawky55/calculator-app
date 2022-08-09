// @flow
import './themeControllerColor.css';
import classes from './themeController.module.css';
const ThemeController = ({ setTheme, theme }) => {
  const handleClick = (event) => {
    setTheme(event.currentTarget.id);
  };

  return (
    <div className={classes.themeController}>
      <div className={classes.themeButtons}>
        <fieldset id="themeButtons" className={classes.themeButtons}>
          <div>
            <input
              id={'one'}
              type="radio"
              className={classes.themeButton}
              name="themeButtons"
              onChange={(event) => handleClick(event)}
              defaultChecked={theme === 'one'}
            />
            <label htmlFor="one">1</label>
          </div>
          <div>
            <input
              id={'two'}
              type="radio"
              className={classes.themeButton}
              name="themeButtons"
              onChange={(event) => handleClick(event)}
              defaultChecked={theme === 'two'}
            />
            <label htmlFor="two">2</label>
          </div>
          <div>
            <input
              id={'three'}
              type="radio"
              className={classes.themeButton}
              name="themeButtons"
              onChange={(event) => handleClick(event)}
              defaultChecked={theme === 'three'}
            />
            <label htmlFor="three">3</label>
          </div>

          <div className={`${classes.wrapper} ${theme} `}></div>
        </fieldset>
      </div>
    </div>
  );
};
export default ThemeController;
