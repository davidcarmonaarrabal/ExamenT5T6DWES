// src/components/Pedidos/Modificar.jsx
import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido, repartidores, pizzas }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name="nombreCliente" defaultValue={pedido.nombreCliente} />
            <input
                name="fechaHora"
                type="datetime-local"
                defaultValue={pedido.fechaHora.toISOString().slice(0, 16)} // Para formatear correctamente
            />
            <input name="direccion" defaultValue={pedido.direccion} />

            {/* Selección de repartidor */}
            <select name="repartidorId" defaultValue={pedido.repartidorId}>
                {repartidores.map((repartidor) => (
                    <option key={repartidor.id} value={repartidor.id}>
                        {repartidor.nombre}
                    </option>
                ))}
            </select>

            {/* Selección de pizzas */}
            <select name="pizzas" multiple>
                {pizzas.map((pizza) => (
                    <option key={pizza.id} value={pizza.id}>
                        {pizza.nombre}
                    </option>
                ))}
            </select>

            <button className="border-2 border-black">Modificar pedido</button>
        </form>
    );
}

export default PedidoModificar;
