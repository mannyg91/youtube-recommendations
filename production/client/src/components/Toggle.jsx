import React, { useEffect, useState } from 'react';
import './styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    const [active, setActive] = useState(true);
    const [ariaActive, setAriaActive] = useState(false);
  
    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        setActive(true);
        setAriaActive(false);
      } else {
        setTheme('theme-dark');
        setActive(false);
        setAriaActive(true);
      }
    };
  
    const handleOnClick = () => {
      changeThemeAndToggle();
    };
  
    const handleKeyPress = e => {
      if (e.code === 'Enter') {
        changeThemeAndToggle();
      }
    };


    return (
      <div className="container--toggle">
        <input
          aria-label="dark mode toggle"
          role="switch"
          aria-checked={ariaActive}
          onKeyPress={handleKeyPress}
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={handleOnClick}
          checked={active}
          readOnly
        />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    );
  }
  

export default Toggle;
