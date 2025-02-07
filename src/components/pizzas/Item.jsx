import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id);
    if (!pizza) notFound();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Detalles de la Pizza</h2>
            
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Nombre:</strong> {pizza.nombre}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>ID:</strong> {pizza.id}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-xl text-gray-700">
                    <strong>Precio:</strong> ${pizza.precio.toFixed(2)}
                </p>
            </div>
        </div>
    );
}
