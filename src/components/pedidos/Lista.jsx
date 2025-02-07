import { obtenerPedidos } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Pedidos() {
    const pedidos = await obtenerPedidos();

    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar />
            </Modal>

            {pedidos.map((pedido) => (
                <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                    <div>
                        <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                            Pedido ID: {pedido.id}
                        </Link>
                        <p>Fecha: {new Date(pedido.fechaHora).toLocaleString()}</p>
                        <p>Cliente: {pedido.nombreCliente}</p>
                        <p>Dirección: {pedido.direccion}</p>
                    </div>

                    <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                        <PedidoModificar pedido={pedido} />
                    </Modal>

                    <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                        <PedidoEliminar pedido={pedido} />
                    </Modal>
                    <hr />
                </div>
            ))}
        </div>
    );
}
