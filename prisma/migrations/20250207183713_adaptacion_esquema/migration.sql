/*
  Warnings:

  - You are about to drop the `_MedicinaToPaciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medicinas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pacientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pizzas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `repartidores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_MedicinaToPaciente` DROP FOREIGN KEY `_MedicinaToPaciente_A_fkey`;

-- DropForeignKey
ALTER TABLE `_MedicinaToPaciente` DROP FOREIGN KEY `_MedicinaToPaciente_B_fkey`;

-- DropForeignKey
ALTER TABLE `pacientes` DROP FOREIGN KEY `pacientes_plantaId_fkey`;

-- DropForeignKey
ALTER TABLE `pedido_pizza` DROP FOREIGN KEY `pedido_pizza_pedidoId_fkey`;

-- DropForeignKey
ALTER TABLE `pedido_pizza` DROP FOREIGN KEY `pedido_pizza_pizzaId_fkey`;

-- DropForeignKey
ALTER TABLE `pedidos` DROP FOREIGN KEY `pedidos_repartidorId_fkey`;

-- DropIndex
DROP INDEX `pedido_pizza_pizzaId_fkey` ON `pedido_pizza`;

-- DropTable
DROP TABLE `_MedicinaToPaciente`;

-- DropTable
DROP TABLE `medicinas`;

-- DropTable
DROP TABLE `pacientes`;

-- DropTable
DROP TABLE `pedidos`;

-- DropTable
DROP TABLE `pizzas`;

-- DropTable
DROP TABLE `plantas`;

-- DropTable
DROP TABLE `repartidores`;

-- CreateTable
CREATE TABLE `Repartidores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaHora` DATETIME(3) NOT NULL,
    `nombreCliente` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `repartidorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pizzas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_repartidorId_fkey` FOREIGN KEY (`repartidorId`) REFERENCES `Repartidores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido_pizza` ADD CONSTRAINT `pedido_pizza_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedidos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido_pizza` ADD CONSTRAINT `pedido_pizza_pizzaId_fkey` FOREIGN KEY (`pizzaId`) REFERENCES `Pizzas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
