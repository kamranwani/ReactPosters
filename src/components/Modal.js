import classes from "./Modal.module.css";
function Modal({ children, hideOverlay }) {
  return (
    <>
      <div className={classes.overlay} onClick={hideOverlay} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
