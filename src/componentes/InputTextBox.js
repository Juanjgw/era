import React, { forwardRef } from 'react';

const InputTextBox = forwardRef((props, ref) => {
  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    const isValidKey = (keyCode >= 48 && keyCode <= 57) || keyCode === 8;
    if (!isValidKey) {
      event.preventDefault();
    }
  };

  return (
    <input
      type="text"
      ref={ref}
      onKeyDown={props.onKeyDown}
      onKeyPress={handleKeyPress}
    />
  );
});

export default InputTextBox;
