import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({ repartidor }) {
    return (
        <form action={modificarRepartidor} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Modificar Repartidor</h2>

            <input type="hidden" name="id" defaultValue={repartidor.id} />

            <div className="mb-4">
                <input
                    name="nombre"
                    defaultValue={repartidor.nombre}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nombre del Repartidor"
                />
            </div>

            <div className="mb-4">
                <input
                    name="telefono"
                    defaultValue={repartidor.telefono}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Teléfono"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Modificar Repartidor
            </button>
        </form>
    );
}

export default RepartidorModificar;
