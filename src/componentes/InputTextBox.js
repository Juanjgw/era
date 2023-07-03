import React, { forwardRef } from 'react';

const InputTextBox = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      onKeyDown={props.onKeyDown}
    />
  );
});

export default InputTextBox;

