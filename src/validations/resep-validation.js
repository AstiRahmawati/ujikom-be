import Joi from "joi";

const createResepValidation = Joi.object({
  img_url: Joi.string().required(),
  judul: Joi.string().max(100).required(),
  alat_bahan: Joi.string().required(),
  langkah: Joi.string().required(),
  id_kategori: Joi.string().max(100).required(),
});

const getResepValidation = Joi.string().required();

const updateResepValidation = Joi.object({
  img_url: Joi.string().required(),
  judul: Joi.string().max(100).required(),
  alat_bahan: Joi.string().required(),
  langkah: Joi.string().required(),
  id_kategori: Joi.string().max(100).required(),
});

export {
  createResepValidation,
  getResepValidation,
  updateResepValidation,
};