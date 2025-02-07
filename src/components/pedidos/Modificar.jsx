import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name="fechaHora" type="datetime-local" defaultValue={pedido.fechaHora.toISOString().slice(0, 16)} />
            <input name="nombreCliente" defaultValue={pedido.nombreCliente} />
            <input name="direccion" defaultValue={pedido.direccion} />
            <input name="repartidorNombre" defaultValue={pedido.repartidor?.nombre} />
            <button className="border-2 border-black">Modificar Pedido</button>
        </form>
    );
}

export default PedidoModificar;
