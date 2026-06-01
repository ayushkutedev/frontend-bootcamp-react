import styles from "./Input.module.css";

function Input({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

// ✅ Add wrapper function to demo it
function Inputcomponent() {
  return (
    <div>
      <Input
        label="Username"
        placeholder="Enter username"
        value=""
        onChange={() => {}}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        value=""
        onChange={() => {}}
        error="Invalid email!"
      />
    </div>
  );
}

export default Inputcomponent;   // ✅ export the demo