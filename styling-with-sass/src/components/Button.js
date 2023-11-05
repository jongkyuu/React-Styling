import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <div className={classNames('Button', size, color, { outline, fullWidth })}>
      {children}
    </div>
  );
  //   return <div className={['Button', size].join(' ')}>{children}</div>;
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
