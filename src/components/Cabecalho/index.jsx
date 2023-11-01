import Link from "next/link"
import styles from "./styles.module.css"
export default function Cabecalho({titulo}){
    
    return(
        <header className={styles.cabecalho}>
            <Link href={"/"} className={styles.titulo}><h1>Reserva de Salas</h1></Link>   
        </header>
    )
}