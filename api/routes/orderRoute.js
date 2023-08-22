import express from "express";
import {
  getAllOrders,
  intent,
  confirm,
} from "../controllers/orderController.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getAllOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;
