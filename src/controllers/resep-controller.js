import resepService from "../services/resep-service.js";
import { logger } from "../application/logging.js";

const createResep = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await resepService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getResep = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await resepService.get(user);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getFiltered = async (req, res, next) => {
    try {
      const resepKategoriId = req.params.resepKategoriId;
      const result = await resepService.getFilter(resepKategoriId);
      res.status(200).json({
        data: result,
      });
    } catch (e) {
      next(e);
    }
  };

const updateResep = async (req, res, next) => {
  try {
    const user = req.user;
    const resepId = req.params.resepId;
    const request = req.body;

    const result = await resepService.update(user, resepId, request); 
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const removeResep = async (req, res, next) => {
    try {
      const user = req.user;
      const resepId = req.params.resepId;
  
      await resepService.remove(user, resepId);
      res.status(200).json({
        data: "Berhasil Menghapus",
      });
    } catch (e) {
      next(e);
    }
  };

export default {
  createResep,
  getResep,
  getFiltered,
  updateResep,
  removeResep
};