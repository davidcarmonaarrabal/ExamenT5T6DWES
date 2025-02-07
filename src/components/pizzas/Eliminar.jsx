import { eliminarPizza } from "@/lib/actions";

function PizzaEliminar({ pizza }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
            <p>PIZZA: {pizza.nombre}</p>
            <p>PRECIO: {pizza.precio}</p>
            <form action={eliminarPizza}>
                <input type="hidden" name="id" defaultValue={pizza.id} />
                <button className="border-2 border-black">Eliminar Pizza</button>
            </form>
        </>
    );
}

export default PizzaEliminar;
