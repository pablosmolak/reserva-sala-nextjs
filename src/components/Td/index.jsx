export default function Td({ children, ...props }) {
    return(
        <>
            <td {...props}>{children}</td>
        </>
    )
}