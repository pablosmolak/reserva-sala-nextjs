import styles from "./styles.module.css"

export default function Input({id, type, placeholder, value, onChange, ...props }
  ){
    return(
        <>
            <input
                className={styles.input}
                placeholder={placeholder}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
        </>
    )
}