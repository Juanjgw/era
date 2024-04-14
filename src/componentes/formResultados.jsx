import ModalControl from './controls/modalControl';

const FormResultados = ({ params, open, handleClose, handleSubmit, ...props }) => {

  const handleSend = () => {
    handleSubmit(params);
  }
    //console.log('Contenido de params:', params);
  return (
    <ModalControl
    open={open}
    title={"Empresa de envio"}
    handleClose={handleClose}
    handleSubmit={handleSend}
    {...props}
  >
    <div>
      <p>El tramo comienza con una columna tipo {params.selectTComienzo} </p>     
      <p>con una separación de: {params.cSeparacion} mm a la pared</p>
      <p>Se eligió: {params.cantidadTramos} vidrios</p> 
      <p>de: {params.largoVidrio} mm</p> 
      <p>con una altura de: {params.altura} mm</p>
      <p>Se eligió: {params.cantidadTramos -1} columnas H</p>
      <p>El tramo termina con una columna tipo {params.selectTTerminacion}</p>
      <p>con una separación de: {params.tSeparacion} mm a la pared</p>
      
      
      
      
      
    </div>
  </ModalControl>
  )
}

export default FormResultados
