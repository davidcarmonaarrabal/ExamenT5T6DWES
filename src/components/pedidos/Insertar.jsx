import { insertarPedido } from "@/lib/actions";

function PedidoInsertar({ repartidores, pizzas }) {
    return (
        <form action={insertarPedido} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Insertar Pedido</h2>

            <div className="mb-4">
                <input
                    name="nombreCliente"
                    placeholder="Nombre del Cliente"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    name="fechaHora"
                    type="datetime-local"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    name="direccion"
                    placeholder="Dirección de entrega"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Repartidor */}
            <div className="mb-4">
                <select
                    name="repartidorId"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {repartidores.map(repartidor => (
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Pizzas */}
            <div className="mb-6">
                <select
                    name="pizzas"
                    multiple
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {pizzas.map(pizza => (
                        <option key={pizza.id} value={pizza.id}>
                            {pizza.nombre} - ${pizza.precio}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Insertar Pedido
            </button>
        </form>
    );
}

export default PedidoInsertar;
