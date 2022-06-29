import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const backdropClick = () => {
    props.closeBackdrop2();
  };

  return <div className={classes.backdrop} onClick={backdropClick} />;
};

export default Backdrop;
