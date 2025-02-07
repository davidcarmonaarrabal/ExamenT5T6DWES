import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor} className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Insertar Repartidor</h2>

            <div className="mb-4">
                <input
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    name="telefono"
                    placeholder="Teléfono"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Insertar Repartidor
            </button>
        </form>
    );
}

export default RepartidorInsertar;
