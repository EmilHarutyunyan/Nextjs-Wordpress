import React from "react";
// Styles
import styles from "./Modal.module.scss"
const Modal = ({ isShowing, hide, title, ...props }) => {
  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h4>{title}</h4>
              <button
                type="button"
                className={styles.modalCloseButton}
                onClick={hide}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className={styles.modalBody}>{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
