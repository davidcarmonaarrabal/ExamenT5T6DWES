import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id);
    if (!repartidor) notFound();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Detalles del Repartidor</h2>

            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Nombre:</strong> {repartidor.nombre}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>ID:</strong> {repartidor.id}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Teléfono:</strong> {repartidor.telefono}
                </p>
            </div>
        </div>
    );
}
