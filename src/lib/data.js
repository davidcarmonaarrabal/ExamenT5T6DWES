import prisma from './prisma.js';

// ------------------------- REPARTIDORES -------------------------

export async function obtenerRepartidores() {
    const repartidores = await prisma.repartidor.findMany();
    return repartidores
}

export async function obtenerRepartidor(id) {
    const repartidor = await prisma.repartidor.findUnique({
        where: { id: +id },
    })
    return repartidor
}

// ------------------------- PEDIDOS -------------------------

export async function obtenerPedidos() {
    const pedidos = await prisma.pedido.findMany();
    return pedidos
}

export async function obtenerPedido(id) {
    const pedido = await prisma.pedido.findUnique({
        where: { id: +id },
        include: {
            repartidor: true,
            pizzas: true,
        }
    })
    return pedido
}

// ------------------------- PIZZAS -------------------------

export async function obtenerPizzas() {
    const pizzas = await prisma.pizza.findMany();
    return pizzas
}

export async function obtenerPizza(id) {
    const pizza = await prisma.pizza.findUnique({
        where: { id: +id },
        include: { pedidos: true }
    })
    return pizza
}
