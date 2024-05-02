import Joi from "joi";

const createKategoriValidation = Joi.object({
  img_url: Joi.string().required(),
  judul: Joi.string().max(100).required(),
  deskripsi: Joi.string().max(200).required(),
});

const getKategoriValidation = Joi.string().required();

const updateKategoriValidation = Joi.object({
    img_url: Joi.string().required(),
    judul: Joi.string().max(100).required(),
    deskripsi: Joi.string().max(200).required(),
  });

export {
  createKategoriValidation,
  getKategoriValidation,
  updateKategoriValidation,
};