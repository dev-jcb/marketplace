import express from "express";
import productCtrl from "../controllers/product.controller.js";

const router = express.Router();

router.route("/api/products").post(productCtrl.create);
router.route("/api/products").get(productCtrl.getAll);
router.route("/api/products").delete(productCtrl.deleteAll);
router.param("id", productCtrl.idSearchParam);
router.route("/api/products/:id").get(productCtrl.getById);
router.route("/api/products?name=").get(productCtrl.getAll);
router.route("/api/products/:id").put(productCtrl.update);
router.route("/api/products/:id").delete(productCtrl.remove);

export default router;
