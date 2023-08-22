import { createError } from "../utils/createError.js";
import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";

export const createReview = async (req, res, next) => {
  try {
    if (req.isSeller) {
      return next(createError(403, "Sellers can't add reviews"));
    }
    const prevReview = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (prevReview) {
      return next(createError(403, "You have already reviewed"));
    }
    const newReview = await Review.create({
      userId: req.userId,
      gigId: req.body.gigId,
      desc: req.body.desc,
      star: req.body.star,
    });
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).json(newReview);
  } catch (error) {
    return next(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).json(reviews);
  } catch (error) {
    return next(error);
  }
};
