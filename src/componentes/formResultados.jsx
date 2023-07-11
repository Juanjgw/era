import ModalControl from './controls/modalControl';

const FormResultados = ({ params, open, handleClose, handleSubmit, ...props }) => {

  const handleSend = () => {
    handleSubmit(params);
  }

  return (
    <ModalControl
    open={open}
    title={"Empresa de envio"}
    handleClose={handleClose}
    handleSubmit={handleSend}
    {...props}
  >
    <div>
      Cantidad de tramos: {params.cantidadTramos}
    </div>
  </ModalControl>
  )
}

export default FormResultados
