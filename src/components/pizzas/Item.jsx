import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";
export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id)
    if (!pizza) notFound()
    return (
        <div>
            <p>Nombre: {pizza.nombre} </p>
            <p>Id: {pizza.id} </p>
            <p>Precio de la pizza: {pizza.precio} </p>
            <p>
                Pedidos: {
                    pizza.pedidos.map(pedido =>
                        <div key={pedido.id}>
                            <p>{pedido.direccion}</p>
                        </div>
                    )
                }
            </p>
        </div>
    );
}