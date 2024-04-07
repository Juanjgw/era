import React, { useState } from 'react'
import ModalControl from './controls/modalControl';
import { Form } from 'react-bootstrap';

const FormCantidadTramos = ({ params, open, handleClose, handleSubmit, ...props }) => {
  const [optionSelected, setOptionSelected] = useState("1");

  const calcularTramos = () => {
    // Reemplazar por calculo cantidad de tramos
    // params cuenta con toda la informacion necesaria
    // Calcular la cantidad de columnas necesarias
    const cantidad_vidrios = Math.floor(params.largoTramo / 1250);
    // Calcular la longitud de cada tramo
    const longitud_tramo = Math.floor((params.largoTramo - ((cantidad_vidrios - 1) * 21)) / cantidad_vidrios);
    const cantidad_columnas = cantidad_vidrios + 1;
    var comienzaEn, terminaEn;

    // Comienzo
    console.log("tcomienzo:", params.selectTComienzo)
    console.log("Parametros recibidos para calculo antes switch: ", params); 
    switch (params.selectTComienzo) {
      case "1":
        comienzaEn = 38; // descuento por tipo C
        break;
      case "2":
        comienzaEn = 43; // descuento por tipo L
        break;
      default:
        // Manejar el caso en que params.tcomienzo no sea ni 1 ni 2
        console.error("Valor no válido para params.tcomienzo:", params.selectTComienzo);
        break;
    }
    console.log(`comienzaEn=${comienzaEn}`);
    
    // Imprimir los resultados
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
  }

  const handleSend = () => {
    calcularTramos();
    handleSubmit(params);
  }

  const handleChange = (event) => {
    setOptionSelected(event.target.value);
  }

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
        label="Propuesta 1"
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
  )
}

export default FormCantidadTramos
