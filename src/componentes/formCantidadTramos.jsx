import React, { useState } from 'react';
import ModalControl from './controls/modalControl';
import { Form } from 'react-bootstrap';

const FormCantidadTramos = ({ params, open, handleClose, handleSubmit, ...props }) => {
  const [optionSelected, setOptionSelected] = useState("1");
  

  const calcularTramos = () => {
    switch (true) {
      case params.selectTComienzo === -1:
        alert("Por favor selecciona una opción para el tipo de comienzo.");
        return;
      case params.selectTTerminacion === -1:
        alert("Por favor selecciona una opción para el tipo de terminación.");
        return;
      case params.selectCSeparacion === -1:
        alert("Por favor selecciona una opción para el tipo de separación de comienzo.");
        return;
      case params.selectTSeparacion === -1:
        alert("Por favor selecciona una opción para el tipo de separación de terminación.");
        return;
      default:
        var comienzaEn = 0;
        var terminaEn = 0;


        // Terminacion
       
        console.log("Parametros recibidos para calculo antes switch: ", params); 
        switch (params.selectCSeparacion) {
          case "1":
            comienzaEn = parseInt(params.selectTComienzo) + parseInt(params.cSeparacion); // descuento por tipo C
            break;
          case "2":
            comienzaEn = parseInt(params.selectTComienzo) + Math.round(((parseInt(params.cSeparacion)) - 55) / 2); // Redondear al entero más cercano
            break;
          default:
            break;
        }
        
        switch (params.selectTSeparacion) {
          case "1":
            terminaEn = parseInt(params.selectTTerminacion) + parseInt(params.tSeparacion); // Agregar separación por tipo C
            break;
          case "2":
            terminaEn = parseInt(params.selectTTerminacion) + Math.round(((parseInt(params.tSeparacion)) - 55) / 2); // Agregar separación por tipo L
            break;
          default:
            break;
        }
        
        // Imprimir los resultados
        const cantidad_vidrios = Math.floor(params.largoTramo / 1250);
        console.log("Valor de params.largoTramo:", params.largoTramo);
        console.log("Valor de comienzaEn:", comienzaEn);
        console.log("Valor de terminaEn:", terminaEn);
        console.log("Valor de params.cSeparacion:", params.cSeparacion);
        console.log("Valor de params.tSeparacion:", params.tSeparacion);
        console.log("Valor de cantidad_vidrios:", cantidad_vidrios);
        const longitud_tramo = Math.round((params.largoTramo - comienzaEn - terminaEn - ((cantidad_vidrios - 1) * 21)) / cantidad_vidrios);

        const cantidad_columnas = cantidad_vidrios + 1;
        console.log("Cantidad de columnas necesarias:", cantidad_columnas);
        console.log("Longitud de los vidrios:", longitud_tramo);

        console.log("Parametros recibidos para calculo: ", params);  
        switch (optionSelected) {
          case "2":
            params.cantidadTramos = 2;
            break;
          case "3":
            params.cantidadTramos = 3;
            break;
          default:
            params.cantidadTramos = 1;
            break;
        }
        break;
    }
  };

  const handleSend = () => {
    calcularTramos();
    handleSubmit(params);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setOptionSelected(value);
  };

  return (
    <ModalControl
      open={open}
      title={"Empresa de envio"}
      handleClose={handleClose}
      handleSubmit={handleSend}
      {...props}
    >
      <Form>
        <Form.Check
          type="radio"
          id="propuesta1"
          name="radioGroup"
          value="1"
          checked={optionSelected === "1"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="propuesta2"
          label="Propuesta 2"
          name="radioGroup"
          value="2"
          checked={optionSelected === "2"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="propuesta3"
          label="Propuesta 3"
          name="radioGroup"
          value="3"
          checked={optionSelected === "3"}
          onChange={handleChange}
        />
      </Form>
    </ModalControl>
  );
};

export default FormCantidadTramos;
