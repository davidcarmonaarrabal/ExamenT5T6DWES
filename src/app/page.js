import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Menú Principal</h1>

            <div className="space-y-4 w-full max-w-sm">
                <Link href="/repartidores" className="block text-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
                    REPARTIDORES
                </Link>
                <Link href="/pedidos" className="block text-center bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                    PEDIDOS
                </Link>
                <Link href="/pizzas" className="block text-center bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
                    PIZZAS
                </Link>
            </div>
        </div>
    );
}
