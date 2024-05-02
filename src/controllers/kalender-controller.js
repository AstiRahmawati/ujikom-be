import kalenderService from "../services/kalender-service.js";
import { logger } from "../application/logging.js";

const createKalender = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await kalenderService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getKalender = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await kalenderService.get(user);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const updateKalender = async (req, res, next) => {
  try {
    const user = req.user;
    const kalenderId = req.params.kalenderId;
    const request = req.body;

    const result = await kalenderService.update(user, kalenderId, request); 
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const removeKalender = async (req, res, next) => {
  try {
    const user = req.user;
    const kalenderId = req.params.kalenderId;

    await kalenderService.remove(user, kalenderId);
    res.status(200).json({
      data: "Berhasil Menghapus",
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createKalender,
  getKalender,
  updateKalender,
  removeKalender
};
