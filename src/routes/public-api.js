import express from "express";
import userController from "../controllers/user-controller.js";
import resepController from "../controllers/resep-controller.js";
import kategoriController from "../controllers/kategori-controller.js";
import kalenderController from "../controllers/kalender-controller.js";

const publicRouter = new express.Router();
publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);

publicRouter.get("/api/kategori", kategoriController.getKategori);
publicRouter.post("/api/kategori", kategoriController.createKategori);
publicRouter.get("/api/kategori/:kategoriId", kategoriController.getOne);
publicRouter.put("/api/kategori/:kategoriId", kategoriController.updateKategori);
publicRouter.delete("/api/kategori/:kategoriId", kategoriController.removeKategori);

publicRouter.post("/api/resep", resepController.createResep);
publicRouter.get("/api/resep", resepController.getResep);
publicRouter.get("/api/resep/:resepKategoriId", resepController.getFiltered);
publicRouter.put("/api/resep/:resepId", resepController.updateResep);
publicRouter.delete("/api/resep/:resepId", resepController.removeResep);

publicRouter.get("/api/kalender", kalenderController.getKalender);
publicRouter.post("/api/kalender", kalenderController.createKalender);
publicRouter.put("/api/kalender/:kalenderId", kalenderController.updateKalender);
publicRouter.delete("/api/kalender/:kalenderId", kalenderController.removeKalender);


export {
    publicRouter
}
