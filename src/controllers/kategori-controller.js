import kategoriService from "../services/kategori-service.js";
import { logger } from "../application/logging.js";

const createKategori = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await kategoriService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getKategori = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await kategoriService.get(user);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getOne = async (req, res, next) => {
  try {
    const kategoriId = req.params.kategoriId;
    const result = await kategoriService.getOne(kategoriId);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const updateKategori = async (req, res, next) => {
    try {
      const user = req.user;
      const kategoriId = req.params.kategoriId;
      const request = req.body;
  
      const result = await kategoriService.update(user, kategoriId, request); 
      res.status(200).json({
        data: result,
      });
    } catch (e) {
      next(e);
    }
  };
  
  const removeKategori = async (req, res, next) => {
      try {
        const user = req.user;
        const kategoriId = req.params.kategoriId;
    
        await kategoriService.remove(user, kategoriId);
        res.status(200).json({
          data: "Berhasil Menghapus",
        });
      } catch (e) {
        next(e);
      }
    };

export default {
  createKategori,
  getKategori,
  getOne,
  updateKategori,
  removeKategori
};