import styles from "./styles.module.css"

export default function TextArea({id, linhas, onChange, colunas, placeholder, value,...props}){
    return(
        <>
            
            <textarea
                className={styles.textarea} 
                id={id} 
                rows={linhas} 
                cols={colunas} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                {...props}
            />

        </>
    )
}