import React, { useRef, useState } from 'react';
import InputTextBox from './componentes/InputTextBox';

function App() {
  const inputRefs = useRef([]);

  const handleKeyDown = (event, currentIndex) => {
    if (event.key === 'Enter') {
      const nextIndex = (currentIndex + 1) % inputRefs.current.length;
      inputRefs.current[nextIndex].current.focus();
    }
  };

  const addInputField = (index) => {
    const newRef = React.createRef();
    inputRefs.current[index] = newRef;
  };

  // Ejemplo: Agregar InputTextBox manualmente
  addInputField(0);
  addInputField(1);
  addInputField(2);
  // Puedes agregar más llamadas a addInputField según tus necesidades

  return (
    <div>
      <div className="card">
        <h5 className="card-header"> Calculo de baranda columnas 55x55</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-1">Largo Total del Tramo:</label>
                </div>
                <div className="col-md-6">
                  <InputTextBox
                    ref={inputRefs.current[0]}
                    onKeyDown={(event) => handleKeyDown(event, 0)}
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-3">Altura de la Baranda:</label>
                </div>
                <div className="col-md-6">
                  <InputTextBox
                    ref={inputRefs.current[1]}
                    onKeyDown={(event) => handleKeyDown(event, 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="card">
        <div className="card-header">
          Tipo de separación y centrado de las columnas
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <div className="form-row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-1">Largo Total del Tramo:</label>
                </div>
                <div className="col-md-6">
                  <InputTextBox
                    ref={inputRefs.current[0]}
                    onKeyDown={(event) => handleKeyDown(event, 0)}
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-3">Altura de la Baranda:</label>
                </div>
                <div className="col-md-6">
                  <InputTextBox
                    ref={inputRefs.current[1]}
                    onKeyDown={(event) => handleKeyDown(event, 1)}
                  />
                </div>
              </div>
              <a href="#" className="btn btn-primary">Calcular</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

  
}  
export default App;  