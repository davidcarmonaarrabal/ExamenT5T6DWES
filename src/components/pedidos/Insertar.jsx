import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return (
        <form action={insertarPedido}>
            <input name="fechaHora" type="datetime-local" placeholder="Fecha y hora" />
            <input name="nombreCliente" placeholder="Nombre del cliente" />
            <input name="direccion" placeholder="Dirección" />
            <input name="repartidorNombre" placeholder="Nombre del repartidor" />
            <button className="border-2 border-black">Insertar Pedido</button>
        </form>
    );
}

export default PedidoInsertar;
