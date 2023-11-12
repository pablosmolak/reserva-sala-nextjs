import styles from "./styles.module.css";

export default function Tfoot({ children }) {
  return <tfoot className={styles.thead}>{children}</tfoot>;
}