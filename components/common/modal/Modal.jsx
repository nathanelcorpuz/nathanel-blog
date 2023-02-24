import styles from "./Modal.module.css";

export default function Modal({ state, children }) {
  const [open, setOpen] = state;
  return (
    open && (
      <div
        onClick={() => {
          console.log("clicked");
          setOpen(false);
        }}
        className={styles.modal}
      >
        <section onClick={(e) => e.stopPropagation()}>{children}</section>
      </div>
    )
  );
}
