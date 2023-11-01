import styles from "./styles.module.css";

export default function Option({children,value, ...props}) {
  return <option className={styles.option}
              value={value}
              {...props}    
          >
                 {children}
          </option>
}