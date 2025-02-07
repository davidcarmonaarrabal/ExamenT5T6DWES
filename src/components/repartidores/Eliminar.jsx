import { eliminarRepartidor } from "@/lib/actions";

function RepartidorEliminar({ repartidor }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">¿Está seguro de eliminar los siguientes datos?</h1>

            <div className="mb-4">
                <p className="text-lg font-medium">REPARTIDOR: <span className="text-gray-800">{repartidor.nombre}</span></p>
                <p className="text-lg font-medium">TELÉFONO: <span className="text-gray-800">{repartidor.telefono}</span></p>
            </div>

            <form action={eliminarRepartidor} className="flex flex-col items-center">
                <input type="hidden" name="id" defaultValue={repartidor.id} />
                <button
                    type="submit"
                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
                >
                    Eliminar Repartidor
                </button>
            </form>
        </div>
    );
}

export default RepartidorEliminar;
