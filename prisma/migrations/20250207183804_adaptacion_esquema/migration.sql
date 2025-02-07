/*
  Warnings:

  - You are about to drop the `Pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pizzas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Repartidores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pedidos` DROP FOREIGN KEY `Pedidos_repartidorId_fkey`;

-- DropForeignKey
ALTER TABLE `pedido_pizza` DROP FOREIGN KEY `pedido_pizza_pedidoId_fkey`;

-- DropForeignKey
ALTER TABLE `pedido_pizza` DROP FOREIGN KEY `pedido_pizza_pizzaId_fkey`;

-- DropIndex
DROP INDEX `pedido_pizza_pizzaId_fkey` ON `pedido_pizza`;

-- DropTable
DROP TABLE `Pedidos`;

-- DropTable
DROP TABLE `Pizzas`;

-- DropTable
DROP TABLE `Repartidores`;

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

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_repartidorId_fkey` FOREIGN KEY (`repartidorId`) REFERENCES `Repartidor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido_pizza` ADD CONSTRAINT `pedido_pizza_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido_pizza` ADD CONSTRAINT `pedido_pizza_pizzaId_fkey` FOREIGN KEY (`pizzaId`) REFERENCES `Pizza`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
