import { obtenerPizzas } from "@/lib/data";
import PizzaInsertar from "./Insertar";
import PizzaModificar from "./Modificar";
import PizzaEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Pizzas</h1>

            <div className="flex justify-center mb-6">
                <Modal openElement={
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
                        Insertar Pizza
                    </button>
                }>
                    <PizzaInsertar />
                </Modal>
            </div>

            <div className="grid gap-6 max-w-3xl mx-auto">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="p-6 bg-white shadow-lg rounded-lg">
                        <div>
                            <Link href={`/pizzas/${pizza.id}`} className="text-xl font-semibold text-green-600 hover:underline">
                                {pizza.nombre}
                            </Link>
                            <p className="text-gray-700">💰 Precio: <span className="font-medium">{pizza.precio}€</span></p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Modal openElement={
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
                                    Modificar
                                </button>
                            }>
                                <PizzaModificar pizza={pizza} />
                            </Modal>

                            <Modal openElement={
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                                    Eliminar
                                </button>
                            }>
                                <PizzaEliminar pizza={pizza} />
                            </Modal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
