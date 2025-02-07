import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id);
    if (!pedido) notFound();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Detalles del Pedido</h2>
            
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>ID:</strong> {pedido.id}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Fecha:</strong> {new Date(pedido.fechaHora).toLocaleDateString()}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Dirección:</strong> {pedido.direccion}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Cliente:</strong> {pedido.nombreCliente}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Repartidor:</strong> {pedido.repartidor?.nombre || 'Sin asignar'}
                </p>
            </div>
        </div>
    );
}
