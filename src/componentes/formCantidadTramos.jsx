import React, { useState, useEffect } from 'react';
import ModalControl from './controls/modalControl';
import { Form } from 'react-bootstrap';

const FormCantidadTramos = ({ params, open, handleClose, handleSubmit, ...props }) => {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);
  const [cantidad_columnas, setCantidad_columnas] = useState(0);
  const [longitud_baranda, setLongitud_baranda] = useState(0);

  useEffect(() => {
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
          const longitud_baranda_calculada = params.largoTramo - comienzaEn - terminaEn;
          setCantidad_columnas(cantidad_columnas_calculadas);
          setLongitud_baranda(longitud_baranda_calculada);

          let selectedOption = '';
          if (selectedOption1) selectedOption = "1";
          else if (selectedOption2) selectedOption = "2";
          else if (selectedOption3) selectedOption = "3";

          switch (selectedOption) {
            case "1":
              params.cantidadTramos = cantidad_columnas - 1;
              params.largoVidrio = longitud_tramo;
              break;
            case "2":
              params.cantidadTramos = cantidad_columnas;
              break;
            case "3":
              params.cantidadTramos = cantidad_columnas + 1;
              break;
            default:
              params.cantidadTramos = 0;
              break;
          }
          break;
      }
    };

    calcularTramos();
  }, [params, selectedOption1, selectedOption2, selectedOption3]);

  const handleSend = () => {
    handleSubmit(params);
  };

  const handleChangeOption1 = () => {
    setSelectedOption1(true);
    setSelectedOption2(false);
    setSelectedOption3(false);
  };

  const handleChangeOption2 = () => {
    setSelectedOption1(false);
    setSelectedOption2(true);
    setSelectedOption3(false);
  };

  const handleChangeOption3 = () => {
    setSelectedOption1(false);
    setSelectedOption2(false);
    setSelectedOption3(true);
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
          label={
            <span>
              Se sugiere utilizar {cantidad_columnas - 2} columnas H, lo que resulta en{' '}
             <strong>{cantidad_columnas - 1} Vidrios</strong> de{' '}
              {Math.round((longitud_baranda - ((cantidad_columnas - 2) * 21)) / (cantidad_columnas - 1))} mm cada uno.
            </span>
          }
          name="radioGroup"
          checked={selectedOption1}
          onChange={handleChangeOption1}
        />
        <Form.Check
          type="radio"
          id="propuesta2"
          label={
            <span>
              Se sugiere utilizar {cantidad_columnas - 1} columnas H, lo que resulta en{' '}
              <strong>{cantidad_columnas} Vidrios</strong> de{' '}
              {params.largoVidrio = Math.round((longitud_baranda - ((cantidad_columnas - 1) * 21)) / cantidad_columnas)} mm cada uno.

            </span>
          }
          name="radioGroup"
          checked={selectedOption2}
          onChange={handleChangeOption2}
        />
        <Form.Check
          type="radio"
          id="propuesta3"
          label={
            <span>
              Se sugiere utilizar {cantidad_columnas} columnas H, lo que resulta en{' '}
              <strong>{cantidad_columnas + 1} Vidrios</strong> de{' '}
              {params.largoVidrio = Math.round((longitud_baranda - (cantidad_columnas * 21)) / (cantidad_columnas + 1))} mm cada uno.
            </span>
          }
          name="radioGroup"
          checked={selectedOption3}
          onChange={handleChangeOption3}
        />
      </Form>
    </ModalControl>
  );
};

export default FormCantidadTramos;
