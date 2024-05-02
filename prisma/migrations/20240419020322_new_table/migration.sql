-- CreateTable
CREATE TABLE `kalender` (
    `id` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `catatan` TEXT NOT NULL,
    `id_resep` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `kalender_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pengingat` (
    `id` VARCHAR(191) NOT NULL,
    `pesan` TEXT NOT NULL,
    `id_kalender` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pengingat_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kalender` ADD CONSTRAINT `kalender_id_resep_fkey` FOREIGN KEY (`id_resep`) REFERENCES `resep`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pengingat` ADD CONSTRAINT `pengingat_id_kalender_fkey` FOREIGN KEY (`id_kalender`) REFERENCES `kalender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
