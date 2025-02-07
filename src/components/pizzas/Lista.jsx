import { obtenerPizzas } from "@/lib/data";
import PizzaInsertar from "./Insertar";
import PizzaModificar from "./Modificar";
import PizzaEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas();

    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar pizza</p>}>
                <PizzaInsertar />
            </Modal>

            {pizzas.map((pizza) => (
                <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                    <div>
                        <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                            {pizza.nombre}
                        </Link>
                        <p>Precio: {pizza.precio}</p>
                    </div>

                    <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                        <PizzaModificar pizza={pizza} />
                    </Modal>

                    <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                        <PizzaEliminar pizza={pizza} />
                    </Modal>
                    <hr />
                </div>
            ))}
        </div>
    );
}
