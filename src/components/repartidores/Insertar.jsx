import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="Teléfono" />
            <button className="border-2 border-black">Insertar Repartidor</button>
        </form>
    );
}

export default RepartidorInsertar;
