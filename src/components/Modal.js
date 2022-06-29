import classes from "./Modal.module.css";

const Modal = (props) => {
  const confirmModalHandler = () => {
    props.closeModalHandler2();
  };

  return (
    <div className={classes.modal}>
      <h3 className={classes.header}>Invalid entry! 👺</h3>
      <p className={classes.message}>
        Please Enter a valid {props.modalContent}
      </p>

      <button className={classes.button} onClick={confirmModalHandler}>
        Okay
      </button>
    </div>
  );
};

export default Modal;
