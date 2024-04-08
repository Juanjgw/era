import React, { useState } from 'react'
import SelectControl from './controls/selectControl';
import { selectTiposAlineacion, selectTiposHerraje } from '../models/measurements';
import FormCantidadTramos from './formCantidadTramos';
import FormResultados from './formResultados';

const defaultParams = {
  ubicacionTramo : "",
  largoTramo: 0,
  cSeparacion: 0,
  tSeparacion: 0,
  altura: 0,
  selectTComienzo: -1,
  selectCSeparacion: -1,
  selectTTerminacion: -1,
  selectTSeparacion: -1,
  cantidadTramos: 0, // ejemplo de valor a definir en modal
}

const FormCalculo = () => {
  const [params, setParams] = useState(defaultParams);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalResultado, setModalResultado] = useState(false);

  const handleChange = (e) => {
    setParams({
      ...params,
      [e.target.id] : e.target.value
    });
  }

  const handleCalcular = () => {
    setModalOpen(true);
  }

  const handleSubmitModal = (result) => {
    // Recibo resultado modal
    setModalResultado(true)
    setModalOpen(false);
  }

  const handleCloseModal = () => {
    // Acciones al cancelar modal de calculo

    setModalOpen(false);
  }

  return (
    <div className="container m-2 vh-50">
      {
        modalOpen && 
        <FormCantidadTramos
          open={modalOpen}
          title="Calcular Tramos"
          params={params}
          handleSubmit={handleSubmitModal}
          handleClose={handleCloseModal}
        />
      }
      <div className="row justify-content-center">
        <div className="col">
          <div className="card mb-3">
            <h5 className="card-header">Calculo de baranda columnas 55x55</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <label  htmlFor="ubicacionTramo" className="mr-3">Ubicación del Tramo:</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="ubicacionTramo"
                        className="form-control"
                        value={params.ubicacionTramo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <label htmlFor="largoTramo" className="mr-1">Largo Total del Tramo:</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        id="largoTramo"
                        className="form-control"
                        value={params.largoTramo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <label className="mr-3">Altura de la Baranda:</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        id="altura"
                        className="form-control"
                        value={params.altura}
                        onChange={handleChange}
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
              <div className="row mb-3">
                
                <div className="col-md-4">
                  <label htmlFor="selectTComienzo" className="form-label">Comienzo</label>
                  <SelectControl
                    id="selectTComienzo"
                    value={params.selectTComienzo}
                    options={selectTiposHerraje}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="selectCSeparacion" className="form-label">Alineacion</label>
                  <SelectControl
                    id="selectCSeparacion"
                    value={params.selectCSeparacion}
                    options={selectTiposAlineacion}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="cSeparacion" className="form-label">Valor</label>
                  <input
                    type="number"
                    id="cSeparacion"
                    className="form-control"
                    value={params.cSeparacion}
                    onChange={handleChange}
                  />
                </div>

              </div>
              <div className="row mb-3">

                <div className="col-md-4">
                  <label htmlFor="selectTTerminacion" className="form-label">Terminacion</label>
                  <SelectControl
                    id="selectTTerminacion"
                    value={params.selectTTerminacion}
                    options={selectTiposHerraje}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="selectTSeparacion" className="form-label">Alineacion</label>
                  <SelectControl
                    id="selectTSeparacion"
                    value={params.selectTSeparacion}
                    options={selectTiposAlineacion}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="tSeparacion" className="form-label">Valor</label>
                  <input
                    type="number"
                    id="tSeparacion"
                    className="form-control"
                    value={params.tSeparacion}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="row">
                
                <div className="col-4 mb-4">              
                  <button className="btn btn-primary" onClick={handleCalcular}>
                    Calcular
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 m-2">
          {
            modalResultado !== "" && (
            <FormResultados
              open={modalResultado}
              title="Resultado"
              params={params}
              handleSubmit={() => setModalResultado(false)}
              handleClose={() => setModalResultado(false)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FormCalculo;
