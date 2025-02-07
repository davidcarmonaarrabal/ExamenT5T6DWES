import { obtenerPedidos } from "@/lib/data";
import Link from "next/link";
export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    return (
        <div>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4
bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`}
                                className="text-2xl block">
                                {pedido.fechaHora}
                            </Link>
                            <p>{pedido.direccion}</p>
                            <p>{pedido.nombreCliente}</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}