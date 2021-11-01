import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { onOpenModal, onCloseModal } from "../../redux/actions";

function ReduxModalClass(props) {
  console.log("render:", props);
  return (
    <div className="btn-blue">
      <Button color="primary" onClick={props.onOpenModal}>
        I'm Redux, Click Me!
      </Button>
      <Modal isOpen={props.openModal} toggle={props.onCloseModal}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onCloseModal}>
            Do Something
          </Button>
          <Button onClick={props.onCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  const { modalReducer } = state;
  return {
    openModal: modalReducer.openModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenModal: () => dispatch(onOpenModal()),
    onCloseModal: () => dispatch(onCloseModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxModalClass);
