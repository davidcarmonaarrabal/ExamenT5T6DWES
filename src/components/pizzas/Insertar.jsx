import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form action={insertarPizza} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Insertar Pizza</h2>

            <div className="mb-4">
                <input
                    name="nombre"
                    placeholder="Nombre de la pizza"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    name="precio"
                    type="number"
                    step="0.01"
                    placeholder="Precio"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Insertar Pizza
            </button>
        </form>
    );
}

export default PizzaInsertar;
