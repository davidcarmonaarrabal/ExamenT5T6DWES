import { eliminarPizza } from "@/lib/actions";

function PizzaEliminar({ pizza }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">¿Desea eliminar los siguientes datos?</h1>

            <div className="mb-4">
                <p className="text-lg font-medium">PIZZA: <span className="text-gray-800">{pizza.nombre}</span></p>
                <p className="text-lg font-medium">PRECIO: <span className="text-gray-800">${pizza.precio}</span></p>
            </div>

            <form action={eliminarPizza} className="flex flex-col items-center">
                <input type="hidden" name="id" defaultValue={pizza.id} />
                <button
                    type="submit"
                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
                >
                    Eliminar Pizza
                </button>
            </form>
        </div>
    );
}

export default PizzaEliminar;
