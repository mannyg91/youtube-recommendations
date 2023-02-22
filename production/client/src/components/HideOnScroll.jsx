import * as React from 'react';

import PropTypes from 'prop-types';
import { useMediaQuery, useScrollTrigger } from '@mui/material';
import Slide from '@mui/material/Slide';



function HideOnScroll(props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  if (isMobile) {
    return (
      <div>
        {children && (
          <Slide appear={false} direction="up" in={!trigger} timeout={500}>
            <div>{children}</div>
          </Slide>
        )}
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};




export default HideOnScroll;