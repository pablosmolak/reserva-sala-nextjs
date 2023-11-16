import styles from "./styles.module.css"
export default function Mensagem({texto, tipo}){
    const estilo = {
        erro :{ 'backgroundColor' : "red",
                'color' : 'white'},
        sucesso: {'backgroundColor' : "green",
                    'color' : 'white'},
        atencao: {'backgroundColor' : "#FFA500",
                    'color' : 'white'}
    }
    return(
        <>
            <div className={styles.cardMensagem} style={estilo[tipo]}>
                <span >{texto}</span>
            </div>
        </>
    )
}