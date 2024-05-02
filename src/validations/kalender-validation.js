import Joi from "joi";

const createKalenderValidation = Joi.object({
  tanggal: Joi.date().iso().required(),
  catatan: Joi.string().required(),
  id_resep: Joi.string().max(100).required(),
  // Tambahkan validasi lain sesuai kebutuhan
});

const updateKalenderValidation = Joi.object({
  tanggal: Joi.date().iso(),
  catatan: Joi.string(),
  id_resep: Joi.string().max(100),
  // Tambahkan validasi lain sesuai kebutuhan
});

export {
  createKalenderValidation,
  updateKalenderValidation
};
