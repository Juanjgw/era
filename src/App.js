import React, { useRef, useState } from 'react';
import InputTextBox from './componentes/InputTextBox';
import InputNumBox from './componentes/InputNumBox';

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
  addInputField(3);
  addInputField(4);

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
                  <label className="mr-3">Ubicación del Tramo:</label>
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
                  <label className="mr-1">Largo Total del Tramo:</label>
                </div>
                <div className="col-md-6">
                  <InputNumBox
                    ref={inputRefs.current[1]}
                    onKeyDown={(event) => handleKeyDown(event, 1)}
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-3">Altura de la Baranda:</label>
                </div>
                <div className="col-md-6">
                  <InputNumBox
                    ref={inputRefs.current[2]}
                    onKeyDown={(event) => handleKeyDown(event, 2)}
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
         
          <div className="form-row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-md-12" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <select className="custom-select custom-select-sm" style={{ marginRight: '10px', width: '100%' }}>
                    <option id="selectTComienzo" selected>Elige tipo de comienzo</option>
                    <option value="1">Comienzo Tipo C</option>
                    <option value="2">Comienzo Tipo L</option>
                  </select>
                  <select className="custom-select custom-select-sm" style={{ marginRight: '10px', width: '100%' }}>
                    <option id="selectCSeparacion" selected>Elige Separación o Centrado</option>
                    <option value="1">Separacion</option>
                    <option value="2">Centrado</option>
                  </select>
                  <InputNumBox
                    ref={inputRefs.current[3]}
                    onKeyDown={(event) => handleKeyDown(event, 3)}
                  />
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-12" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <select className="custom-select custom-select-sm" style={{ marginRight: '10px', width: '100%' }}>
                    <option id="selectTTerminacion" selected>Elige tipo de Terminación</option>
                    <option value="1">Terminación Tipo C</option>
                    <option value="2">Terminación Tipo L</option>
                  </select>
                  <select className="custom-select custom-select-sm" style={{ marginRight: '10px', width: '100%' }}>
                    <option id="selectTSeparacion" selected>Elige Separación o Centrado</option>
                    <option value="1">Separacion</option>
                    <option value="2">Centrado</option>
                  </select>
                  <InputNumBox
                    ref={inputRefs.current[4]}
                    onKeyDown={(event) => handleKeyDown(event, 4)}
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