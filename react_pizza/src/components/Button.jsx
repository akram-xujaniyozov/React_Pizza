import React from 'react';
import classname from 'classname';

const Button = ({ outline, className, children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={classname('button', className, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    </div>
  );
};

export default Button;
