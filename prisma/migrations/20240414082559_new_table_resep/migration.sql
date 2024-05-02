-- CreateTable
CREATE TABLE `resep` (
    `id` VARCHAR(191) NOT NULL,
    `img_url` VARCHAR(200) NOT NULL,
    `judul` VARCHAR(100) NOT NULL,
    `alat_bahan` VARCHAR(200) NOT NULL,
    `langkah` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `resep_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
