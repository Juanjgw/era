import React, { useState } from 'react'
import ModalControl from './controls/modalControl';
import { Form } from 'react-bootstrap';


const FormCantidadTramos = ({ params, open, handleClose, handleSubmit, ...props }) => {
  const [optionSelected, setOptionSelected] = useState("1");

  const calcularTramos = () => {
    if (!params.selectTComienzo || !params.selectTTerminacion || !params.selectCSeparacion || !params.selectTSeparacion ||
      params.selectTComienzo === "" || params.selectTTerminacion === "" || params.selectCSeparacion === "" || params.selectTSeparacion === "") {
    alert("Por favor selecciona una opción en cada selector antes de calcular.");
    return; // Salir de la función si falta alguna selección
  }
  
    
    var comienzaEn = 0;
    var terminaEn = 0;

    
     var tipoTerminacion = 0;
    

    // Terminacion
    tipoTerminacion = params.selectTTerminacion

  
    console.log("Parametros recibidos para calculo antes switch: ", params); 
    switch (params.selectCSeparacion) {
      case "1":
        comienzaEn = parseInt(params.selectTComienzo) + parseInt(params.cSeparacion)  // descuento por tipo C
        break;
      case "2":
          
        comienzaEn = (parseInt(params.selectTComienzo)) + (Math.round(((parseInt(params.cSeparacion)) - 55) / 2)); // Redondear al entero más cercano
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
  }

  const handleSend = () => {
    calcularTramos();
    handleSubmit(params);
  }

  /*const handleChange = (event) => {
    setOptionSelected(event.target.value);
  }*/
  const handleChange = (event) => {
    const { name, value } = event.target;
    setOptionSelected(value);
    
   
  

  return (
    <ModalControl
    open={open}
    title={"Empresa de envio"}
    handleClose={handleClose}
    handleSubmit={handleSend}
    {...props}
  >
    //const longitud_baranda = params.largoTramo - comienzaEn - terminaEn - params.tSeparacion - params.cSeparacion;

    <Form>
      <Form.Check
        type="radio"
        id="propuesta1"
        //const longitud_tramo = Math.round((params.largoTramo - comienzaEn - terminaEn - params.tSeparacion - ((cantidad_vidrios - 1) * 21)) / cantidad_vidrios);

       // label={`Se sugiere utilizar ${cantidad_columnas - 2} columnas, lo que resulta en ${cantidad_columnas - 1} Vidrios de ${(longitud_baranda - ((cantidad_columnas - 2) * 21)) / (cantidad_columnas - 1)} mm cada uno.`}
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
