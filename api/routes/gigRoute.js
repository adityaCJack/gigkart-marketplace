import express from "express";
import { verifyToken } from "../middlewares/jwt.js";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gigController.js";
const router = express.Router();

router.get("/", getGigs);
router.post("/", verifyToken, createGig);
router.get("/single/:id", getGig);
router.delete("/:id", verifyToken, deleteGig);

export default router;
