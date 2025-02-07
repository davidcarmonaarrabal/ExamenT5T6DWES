import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">¿Está seguro de eliminar los siguientes datos?</h1>

            <div className="mb-4">
                <p className="text-lg font-medium">PEDIDO ID: <span className="text-gray-800">{pedido.id}</span></p>
                <p className="text-lg font-medium">FECHA: <span className="text-gray-800">{new Date(pedido.fechaHora).toLocaleString()}</span></p>
                <p className="text-lg font-medium">CLIENTE: <span className="text-gray-800">{pedido.nombreCliente}</span></p>
                <p className="text-lg font-medium">DIRECCIÓN: <span className="text-gray-800">{pedido.direccion}</span></p>
                <p className="text-lg font-medium">REPARTIDOR: <span className="text-gray-800">{pedido.repartidor?.nombre}</span></p>
            </div>

            <form action={eliminarPedido} className="flex flex-col items-center">
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button
                    type="submit"
                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
                >
                    Eliminar Pedido
                </button>
            </form>
        </div>
    );
}

export default PedidoEliminar;
