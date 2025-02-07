import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";
export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id)
    if (!pedido) notFound()
    return (
        <div>
            <p>Id: {pedido.id} </p>
            <p>Fecha: {pedido.fechaHora.toLocaleDateString()} </p>
            <p>Dirección:
                {pedido.direccion} </p>
            <p>Cliente: {pedido.nombreCliente} </p>
            <p>Repartidor: {repartidor.pedido?.nombre} </p>
        </div>
    );
}