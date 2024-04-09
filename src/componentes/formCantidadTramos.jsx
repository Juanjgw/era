import React, { useState, useEffect } from 'react';
import ModalControl from './controls/modalControl';
import { Form } from 'react-bootstrap';

const FormCantidadTramos = ({ params, open, handleClose, handleSubmit, ...props }) => {
  const [optionSelected, setOptionSelected] = useState("1");
  const [cantidad_columnas, setCantidad_columnas] = useState(0);
  const [longitud_baranda, setLongitud_baranda] = useState(0);

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

        const cantidad_vidrios = Math.floor(params.largoTramo / 1400);
        const longitud_tramo = Math.round((params.largoTramo - comienzaEn - terminaEn - ((cantidad_vidrios - 1) * 21)) / cantidad_vidrios);

        const cantidad_columnas_calculadas = cantidad_vidrios + 1;
        const longitud_baranda_calculada = params.largoTramo - comienzaEn - terminaEn
        setCantidad_columnas(cantidad_columnas_calculadas);
        setLongitud_baranda(longitud_baranda_calculada);

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

  useEffect(() => {
    calcularTramos();
  }, [params, optionSelected]);
  
  useEffect(() => {
    console.log("Valores de params:", params); // Aquí se imprime params al cargar el componente o cada vez que params cambie
  }, [params]);

  const handleSend = () => {
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
          label={`Se sugiere utilizar ${cantidad_columnas - 2} columnas, lo que resulta en ${cantidad_columnas - 1} Vidrios de ${Math.round((longitud_baranda - ((cantidad_columnas - 2) * 21)) / (cantidad_columnas - 1))} mm cada uno.`}
          name="radioGroup"
          value="1"
          checked={optionSelected === "1"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="propuesta2"
          label={`Se sugiere utilizar ${cantidad_columnas - 1} columnas, lo que resulta en <strong>${cantidad_columnas}</strong> Vidrios de ${Math.round((longitud_baranda - ((cantidad_columnas - 1) * 21)) / cantidad_columnas)} mm cada uno.`}
          name="radioGroup"
          value="2"
          checked={optionSelected === "2"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="propuesta3"
          label={`Se sugiere utilizar ${cantidad_columnas} columnas, lo que resulta en ${cantidad_columnas +1} Vidrios de ${Math.round((longitud_baranda - (cantidad_columnas*21)) / (cantidad_columnas + 1))} mm cada uno.`}
         
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
