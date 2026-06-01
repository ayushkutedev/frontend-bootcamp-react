import styles from "./Button.module.css";

function Buttonmodule({ children }) {
    return <button className={styles.button}>{children}Click me</button>

}

export default Buttonmodule;