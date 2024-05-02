import { validate } from "../validations/validation.js";
import {
  createResepValidation,
  updateResepValidation,
} from "../validations/resep-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/response-error.js";
import { v4 as uuidv4 } from "uuid";

const create = async (user, request) => {
  const resep = validate(createResepValidation, request);
  resep.id = uuidv4();

  return prismaClient.Resep.create({
    data: {
      ...resep,
    },
    select: {
      id: true,
      img_url: true,
      judul: true,
      alat_bahan: true,
      langkah: true,
      id_kategori: true
    },
  });
};

const get = async (user) => {
  const resep = await prismaClient.resep.findMany({
    select: {
        id: true,
        img_url: true,
        judul: true,
        alat_bahan: true,
        langkah: true,
    },
  });

  return resep;
};
const getFilter = async (request) => {
  const resep = await prismaClient.resep.findMany({
   where: {
    id_kategori: request
   }
  });

  return resep;
};

const update = async (user, resepId, request) => {
  const resepData = validate(updateResepValidation, request);

  if (!resepData) {
    throw new ResponseError(404, "Invalid Resep Data");
  }

  const existingResep = await prismaClient.resep.findUnique({
    where: {
      id: resepId,
    },
  });

  if (!existingResep) {
    throw new ResponseError(404, "Resep not found");
  }

  return prismaClient.resep.update({
    where: {
      id: resepId,
    },
    data: {
        img_url: resepData.img_url,
        judul: resepData.judul,
        alat_bahan: resepData.alat_bahan,
        langkah: resepData.langkah,
        id_kategori: resepData.id_kategori
    },
    select: {
        id: true,
        img_url: true,
        judul: true,
        alat_bahan: true,
        langkah: true,
        id_kategori: true
    },
  });
};

const remove = async (user, resepId) => {
  const existingResep = await prismaClient.resep.findUnique({
    where: {
      id: resepId,
    },
  });

  if (!existingResep) {
    throw new ResponseError(404, "Resep not found");
  }

  await prismaClient.resep.delete({
    where: {
      id: resepId,
    },
  });
};

export default {
  create,
  get,
  getFilter,
  update,
  remove,
};