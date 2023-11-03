import { useEffect, useState } from "react";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";
import { api } from "@/services/api";

export default function ListTable({cadastrou}){

    const [reservas, setReservas] = useState([])

    useEffect(() => {
        api.get('/reservas')
            .then(e => setReservas(e.data))
    },[cadastrou])
    return(
        <>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Descrição</Th>
                        <Th>Solicitante</Th>
                        <Th>Sala</Th>
                        <Th>Inicio</Th>
                        <Th>Fim</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {reservas.map((reserva) => (
                        <Tr key={reserva.id}>
                            <Td>{reserva.descricao}</Td>
                            <Td>{reserva.solicitante}</Td>
                            <Td>{reserva.sala}</Td>
                            <Td>{reserva.inicio}</Td>
                            <Td>{reserva.fim}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    )
}