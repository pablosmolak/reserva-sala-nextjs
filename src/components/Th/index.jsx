import styles from './styles.module.css'
export default function Th({ children, center, left, right, ...props }) {
    return(
        <>
            <th className={styles.th} {...props}>{children}</th>
        </>
    )
}