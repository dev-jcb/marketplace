import express from "express";
import productCtrl from "../controllers/product.controller.js";

const router = express.Router();

router.route("/api/products").post(productCtrl.create);
router.route("/api/products").get(productCtrl.getAll);
router.param("productId", productCtrl.idSearchParam);
router.route("/api/products/:productId").get(productCtrl.getById);
router.route("/api/products?name=").get(productCtrl.getAll);
router.route("/api/products/:productId").put(productCtrl.update);
router.route("/api/products/:productId").delete(productCtrl.remove);

export default router;
