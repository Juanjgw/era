import React, { useState } from 'react';

const CheckInputTextBox = ({ label, value, onChange }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Verificar si el valor es un número
    if (!isNaN(inputValue)) {
      setErrorMessage('');
      onChange(inputValue); // Llamar a la función onChange
    } else {
      setErrorMessage('Solo se permiten números');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '5px' }}>{label}</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={value}
          onChange={handleInputChange}
        />
      </div>

      {errorMessage && <span style={{ color: 'red', marginLeft: '5px' }}>{errorMessage}</span>}
    </div>
  );
};

export default CheckInputTextBox;