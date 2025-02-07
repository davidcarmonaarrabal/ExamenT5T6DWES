import { modificarPizza } from "@/lib/actions";

function PizzaModificar({ pizza }) {
    return (
        <form action={modificarPizza} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Modificar Pizza</h2>

            <input type="hidden" name="id" defaultValue={pizza.id} />

            <div className="mb-4">
                <input
                    name="nombre"
                    defaultValue={pizza.nombre}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nombre de la pizza"
                />
            </div>

            <div className="mb-4">
                <input
                    name="precio"
                    type="number"
                    step="0.01"
                    defaultValue={pizza.precio}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Precio"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
                Modificar Pizza
            </button>
        </form>
    );
}

export default PizzaModificar;
