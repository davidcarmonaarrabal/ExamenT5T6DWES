import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Está seguro de eliminar los siguientes datos?</h1>
            <p>PEDIDO ID: {pedido.id}</p>
            <p>FECHA: {new Date(pedido.fechaHora).toLocaleString()}</p>
            <p>CLIENTE: {pedido.nombreCliente}</p>
            <p>DIRECCIÓN: {pedido.direccion}</p>
            <p>REPARTIDOR: {pedido.repartidor?.nombre}</p>
            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar Pedido</button>
            </form>
        </>
    );
}

export default PedidoEliminar;
