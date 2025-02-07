import { obtenerRepartidores } from "@/lib/data";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Repartidores() {
    const repartidores = await obtenerRepartidores();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Repartidores</h1>

            <div className="flex justify-center mb-6">
                <Modal openElement={
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                        Insertar Repartidor
                    </button>
                }>
                    <RepartidorInsertar />
                </Modal>
            </div>

            <div className="grid gap-6 max-w-3xl mx-auto">
                {repartidores.map((repartidor) => (
                    <div key={repartidor.id} className="p-6 bg-white shadow-lg rounded-lg">
                        <div>
                            <Link href={`/repartidores/${repartidor.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                                {repartidor.nombre}
                            </Link>
                            <p className="text-gray-600">{repartidor.telefono}</p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Modal openElement={
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
                                    Modificar
                                </button>
                            }>
                                <RepartidorModificar repartidor={repartidor} />
                            </Modal>

                            <Modal openElement={
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                                    Eliminar
                                </button>
                            }>
                                <RepartidorEliminar repartidor={repartidor} />
                            </Modal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
