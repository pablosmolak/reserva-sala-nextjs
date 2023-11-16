import styles from "./styles.module.css";

export default function Select({ children, id, onChange, value, ...props }) {
  return(
    <>
      <select  
        className={styles.select} 
        value={value}
        id={id}
        onChange={onChange}
        {...props} 
        >
          {children}
      </select>
  </>
  )
}