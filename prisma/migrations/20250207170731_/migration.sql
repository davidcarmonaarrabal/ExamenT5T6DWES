-- CreateTable
CREATE TABLE `Repartidor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaHora` DATETIME(3) NOT NULL,
    `nombreCliente` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `repartidorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pizza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidoPizza` (
    `pedidoId` INTEGER NOT NULL,
    `pizzaId` INTEGER NOT NULL,

    PRIMARY KEY (`pedidoId`, `pizzaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_repartidorId_fkey` FOREIGN KEY (`repartidorId`) REFERENCES `Repartidor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoPizza` ADD CONSTRAINT `PedidoPizza_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoPizza` ADD CONSTRAINT `PedidoPizza_pizzaId_fkey` FOREIGN KEY (`pizzaId`) REFERENCES `Pizza`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
