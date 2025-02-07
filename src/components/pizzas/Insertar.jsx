import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form action={insertarPizza}>
            <input name="nombre" placeholder="Nombre de la pizza" />
            <input name="precio" type="number" step="0.01" placeholder="Precio" />
            <button className="border-2 border-black">Insertar Pizza</button>
        </form>
    );
}

export default PizzaInsertar;
