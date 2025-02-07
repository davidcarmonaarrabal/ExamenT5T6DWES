import { obtenerPedidos } from "@/lib/data";
import { obtenerRepartidores } from "@/lib/data";
import { obtenerPizzas } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Pedidos() {
    const pedidos = await obtenerPedidos();
    const repartidores = await obtenerRepartidores();
    const pizzas = await obtenerPizzas();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Pedidos</h1>

            <div className="flex justify-center mb-6">
                <Modal openElement={
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                        Insertar Pedido
                    </button>
                }>
                    <PedidoInsertar repartidores={repartidores} pizzas={pizzas} />
                </Modal>
            </div>

            <div className="grid gap-6 max-w-3xl mx-auto">
                {pedidos.map((pedido) => (
                    <div key={pedido.id} className="p-6 bg-white shadow-lg rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                                Pedido ID: {pedido.id}
                            </Link>
                            <p className="text-gray-600">📅 Fecha: {new Date(pedido.fechaHora).toLocaleString()}</p>
                            <p className="text-gray-700">👤 Cliente: <span className="font-medium">{pedido.nombreCliente}</span></p>
                            <p className="text-gray-700">📍 Dirección: {pedido.direccion}</p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Modal openElement={
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
                                    Modificar
                                </button>
                            }>
                                <PedidoModificar pedido={pedido} />
                            </Modal>

                            <Modal openElement={
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                                    Eliminar
                                </button>
                            }>
                                <PedidoEliminar pedido={pedido} />
                            </Modal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
