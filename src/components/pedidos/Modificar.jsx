import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido, repartidores, pizzas }) {
    return (
        <form action={modificarPedido} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Modificar Pedido</h2>

            <input type="hidden" name="id" defaultValue={pedido.id} />

            <div className="mb-4">
                <input
                    name="nombreCliente"
                    defaultValue={pedido.nombreCliente}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nombre del Cliente"
                />
            </div>

            <div className="mb-4">
                <input
                    name="fechaHora"
                    type="datetime-local"
                    defaultValue={pedido.fechaHora.toISOString().slice(0, 16)} // Para formatear correctamente
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    name="direccion"
                    defaultValue={pedido.direccion}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Dirección"
                />
            </div>

            {/* Selección de repartidor */}
            <div className="mb-4">
                <select
                    name="repartidorId"
                    defaultValue={pedido.repartidorId}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {repartidores.map((repartidor) => (
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Selección de pizzas */}
            <div className="mb-4">
                <select
                    name="pizzas"
                    multiple
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {pizzas.map((pizza) => (
                        <option key={pizza.id} value={pizza.id}>
                            {pizza.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Modificar Pedido
            </button>
        </form>
    );
}

export default PedidoModificar;
