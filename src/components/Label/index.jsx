import styles from "./styles.module.css"

export default function Label({texto, forhtml, ...props}){
    return(
        <>
            <label htmlFor={forhtml} className={styles.label} {...props}>{texto}</label>
        </>
    )
}