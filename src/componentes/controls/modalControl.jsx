import { Button, Modal } from 'react-bootstrap';

const ModalControl = ({ children, title, open, handleClose, handleSubmit, ...props }) => {


  const handleSubmitModal = () => {
    handleSubmit && handleSubmit();
  }

  const handleCloseModal = () => {
    handleClose && handleClose();
  }

  return (
    <>
      <Modal 
        show={open}
        onHide={handleClose}
        centered
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title || ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalControl
