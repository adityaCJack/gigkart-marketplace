import { createError } from "../utils/createError.js";
import Gig from "../models/gigModel.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "Only sellers can create a gig"));
  }
  try {
    const createdGig = await Gig.create({
      userId: req.userId,
      ...req.body,
    });
    res.status(201).json(createdGig);
  } catch (error) {
    return next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId) {
      return next(createError(403, "You can only delete your gig"));
    }
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json("Gig has been deleted successfully");
  } catch (error) {
    return next(error);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "Gig not found!"));
    }
    res.status(200).json(gig);
  } catch (error) {
    return next(error);
  }
};

export const getGigs = async (req, res, next) => {
  const query = req.query;
  const filters = {
    ...(query.userId && { userId: query.userId }),
    ...(query.cat && { cat: query.cat }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gt: query.min }),
        ...(query.max && { $lt: query.max }),
      },
    }),
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [query.sort]: -1 });
    res.status(200).json(gigs);
  } catch (error) {
    return next(error);
  }
};
