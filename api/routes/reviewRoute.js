import express from "express";
import { verifyToken } from "../middlewares/jwt.js";
import { createReview, getReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", verifyToken, getReviews);

export default router;
