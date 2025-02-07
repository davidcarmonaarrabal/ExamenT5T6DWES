import { insertarPedido } from "@/lib/actions";

function PedidoInsertar({ repartidores, pizzas }) {
    return (
        <form action={insertarPedido}>
            <input name="nombreCliente" placeholder="Nombre del Cliente" />
            <input name="fechaHora" type="datetime-local" />
            <input name="direccion" placeholder="Dirección de entrega" />

            <select name="repartidorId">
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>

            <select name="pizzas" multiple>
                {pizzas.map(pizza => (
                    <option key={pizza.id} value={pizza.id}>
                        {pizza.nombre} - ${pizza.precio}
                    </option>
                ))}
            </select>

            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}

export default PedidoInsertar;
