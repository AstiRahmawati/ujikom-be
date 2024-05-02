import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async (user, data) => {
  try {
    const tanggal = new Date(data.tanggal);

    const createdKalender = await prisma.kalender.create({
      data: {
        tanggal: tanggal, 
        catatan: data.catatan,
        id_resep: data.id_resep,
      },
    });

    return createdKalender;
  } catch (error) {
    throw new Error(`Failed to create kalender: ${error.message}`);
  }
};

const get = async (user) => {
  try {
    // Lakukan operasi pengambilan kalender dari database
    const kalender = await prisma.kalender.findMany({
      where: {
        // user: {
        //   id: user.id
        // }
      },
    });

    return kalender;
  } catch (error) {
    throw new Error(`Failed to fetch kalender: ${error.message}`);
  }
};

const update = async (user, kalenderId, data) => {
  try {
    const tanggal = new Date(data.tanggal);

    // Lakukan operasi update kalender di database
    const updatedKalender = await prisma.kalender.update({
      where: {
        id: kalenderId,
      },
      data: {
        tanggal: tanggal, // Gunakan objek Date yang telah diubah
        catatan: data.catatan,
        // Jika ada field lain yang perlu diubah, tambahkan di sini
      },
    });

    return updatedKalender;
  } catch (error) {
    throw new Error(`Failed to update kalender: ${error.message}`);
  }
};

const remove = async (user, kalenderId) => {
  try {
    await prisma.kalender.delete({
      where: {
        id: kalenderId,
      },
    });
  } catch (error) {
    throw new Error(`Failed to remove kalender: ${error.message}`);
  }
};

export default {
  create,
  get,
  update,
  remove
};
