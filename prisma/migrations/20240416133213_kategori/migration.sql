/*
  Warnings:

  - Added the required column `id_kategori` to the `resep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `resep` ADD COLUMN `id_kategori` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `kategori` (
    `id` VARCHAR(191) NOT NULL,
    `img_url` VARCHAR(200) NOT NULL,
    `judul` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `kategori_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resep` ADD CONSTRAINT `resep_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
