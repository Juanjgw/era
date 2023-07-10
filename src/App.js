import React, { useRef, useState } from 'react';
import InputTextBox from './componentes/InputTextBox';
import InputNumBox from './componentes/InputNumBox';


const parametrosDefault = {
  ubicacionTramo: 0,
  largoTramo: 0,
  alturaBaranda: 0,
};

// Variables iniciales
const longitudBaranda = 0;
const cantidadColumnas = 0;

const handleCalcular = () => {
  const options = calculateOptions(longitudBaranda, cantidadColumnas);
  // Lógica adicional para realizar el cálculo o procesamiento de las opciones
  console.log(options);
};
function App() {
  const inputRefs = useRef([]);
  const [params, setParams] = useState(parametrosDefault);

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

  const handleChange = (target) => {
    const { name, value } = target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const calculateOptions = (longitudBaranda, cantidadColumnas) => {
    // Lógica para calcular las opciones
    const options = [];

    if (longitudBaranda > 1250) {
      if (cantidadColumnas - 1 >= 1) {
        const value = cantidadColumnas - 1;
        const text = `Se sugiere utilizar ${cantidadColumnas - 2} columnas H, lo que resulta en ${cantidadColumnas - 1} Vidrios de ${((longitudBaranda - ((cantidadColumnas - 2) * 21)) / (cantidadColumnas - 1)).toFixed(1)} mm cada uno.`;
        options.push({ value, text });
      }

      if (cantidadColumnas === 1) {
        const value = cantidadColumnas;
        const text = `Se sugiere utilizar ${cantidadColumnas} Vidrio de ${((longitudBaranda - ((cantidadColumnas - 1) * 21)) / cantidadColumnas).toFixed(1)} mm.`;
        options.push({ value, text });
      } else if (cantidadColumnas > 1) {
        const value = cantidadColumnas;
        const text = `Se sugiere utilizar ${cantidadColumnas - 1} columnas H, lo que resulta en ${cantidadColumnas} Vidrios de ${((longitudBaranda - ((cantidadColumnas - 1) * 21)) / cantidadColumnas).toFixed(1)} mm cada uno.`;
        options.push({ value, text });
      }

      const value = cantidadColumnas + 1;
      const text = `Se sugiere utilizar ${cantidadColumnas} columnas H, lo que resulta en ${cantidadColumnas + 1} Vidrios de ${((longitudBaranda - (cantidadColumnas * 21)) / (cantidadColumnas + 1)).toFixed(1)} mm cada uno.`;
      options.push({ value, text });
    } else {
      const value = 1;
      const text = `Se sugiere utilizar 1 Vidrio de ${longitudBaranda} mm.`;
      options.push({ value, text });
    }

    return options;
  };

  const App = () => {
    const [longitudBaranda, setLongitudBaranda] = useState(0);
    const [cantidadColumnas, setCantidadColumnas] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleConfirm = () => {
      // Lógica para manejar la selección confirmada
    };

    const handleCalcular = () => {
      const options = calculateOptions(longitudBaranda, cantidadColumnas);
      // Lógica adicional para realizar el cálculo o procesamiento de las opciones
      console.log(options);
    };

    return (
      <div>
        <div>
          <label>Longitud de la Baranda:</label>
          <input
            type="number"
            value={longitudBaranda}
            onChange={(e) => setLongitudBaranda(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Cantidad de Columnas:</label>
          <input
            type="number"
            value={cantidadColumnas}
            onChange={(e) => setCantidadColumnas(Number(e.target.value))}
          />
        </div>

        <button onClick={handleCalcular}>Calcular</button>

        {selectedOption && (
          <div>
            <label>
              <input
                type="radio"
                value={selectedOption}
                checked={selectedOption === selectedOption}
                onChange={() => setSelectedOption(selectedOption)}
              />
              {selectedOption.text}
            </label>
          </div>
        )}

        {selectedOption && <button onClick={handleConfirm}>Confirmar</button>}
      </div>
    );
  };

  // Ejemplo: Agregar InputTextBox manualmente
  addInputField(0);
  addInputField(1);
  addInputField(2);
  addInputField(3);
  addInputField(4);

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Calculo de baranda columnas 55x55</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <label className="mr-3">Ubicación del Tramo:</label>
                </div>
                <div className="col-md-6">
                  <InputTextBox
                    value={params.ubicacionTramo}
                    onChange={(e) => handleChange(e.target)}
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
        <div className="card-header">Tipo de separación y centrado de las columnas</div>
        <div className="card-body">
          <div className="form-row">
            <div className="col-md-6 mb-4">              <div className="row align-items-center">
              <div className="col-md-12" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <select className="custom-select custom-select-sm col-md-4 mr-3">
                    <option id="selectTComienzo" selected>Elige tipo de comienzo</option>
                    <option value="1">Comienzo Tipo C</option>
                    <option value="2">Comienzo Tipo L</option>
                  </select>
                  <select className="custom-select custom-select-sm col-md-4 mr-3">
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
                  <select className="custom-select custom-select-sm col-md-4 mr-3">
                    <option id="selectTTerminacion" selected>Elige tipo de Terminación</option>
                    <option value="1">Terminación Tipo C</option>
                    <option value="2">Terminación Tipo L</option>
                  </select>
                  <select className="custom-select custom-select-sm col-md-4 mr-3">
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

              <button className="btn btn-primary" onClick={handleCalcular}>
                Calcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



