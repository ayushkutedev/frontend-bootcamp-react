// Button.jsx
import styles from "./Btncomp.module.css";

function Button({ children, variant = "primary", onClick }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonComponent() {
  return (
    <div>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </div>
  );
}

export default ButtonComponent;