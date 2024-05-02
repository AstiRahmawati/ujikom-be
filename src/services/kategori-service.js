import { validate } from "../validations/validation.js";
import {
  createKategoriValidation,
  getKategoriValidation,
  updateKategoriValidation,
} from "../validations/kategori-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/response-error.js";
import { v4 as uuidv4 } from "uuid";

const create = async (user, request) => {
  const kategori = validate(createKategoriValidation, request);
  kategori.id = uuidv4();

  return prismaClient.kategori.create({
    data: {
      ...kategori,
    },
    select: {
      id: true,  
      img_url: true,
      judul: true,
      deskripsi: true,
    },
  });
};

const get = async (user) => {
  const kategori = await prismaClient.kategori.findMany(
  );

  return kategori;
};

const getOne = async (request) => {
    const kategoriId = validate(getKategoriValidation, request);

    const kategori = await prismaClient.kategori.findMany({
      where: {
        id_kategori : kategoriId
      }
    });
  
    return kategori;
  };

const update = async (user, kategoriId, request) => {
    const kategoriData = validate(updateKategoriValidation, request);
  
    if (!kategoriData) {
      throw new ResponseError(404, "Invalid Kategori Data");
    }
  
    const existingKategori = await prismaClient.kategori.findUnique({
      where: {
        id: kategoriId,
      },
    });
  
    if (!existingKategori) {
      throw new ResponseError(404, "Kategori not found");
    }
  
    return prismaClient.kategori.update({
      where: {
        id: kategoriId,
      },
      data: {
          img_url: kategoriData.img_url,
          judul: kategoriData.judul,
          deskripsi: kategoriData.deskripsi,
      },
      select: {
          id: true,
          img_url: true,
          judul: true,
          deskripsi: true,
      },
    });
  };
  
  const remove = async (user, kategoriId) => {
    const existingKategori = await prismaClient.kategori.findUnique({
      where: {
        id: kategoriId,
      },
    });
  
    if (!existingKategori) {
      throw new ResponseError(404, "Kategori not found");
    }
  
    await prismaClient.kategori.delete({
      where: {
        id: kategoriId,
      },
    });
  };

export default {
  create,
  get,
  getOne,
  update,
  remove
};