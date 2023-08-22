import Conversation from "../models/conversationModel.js";
import { createError } from "../utils/createError.js";

export const createConversation = async (req, res, next) => {
  try {
    const savedCon = await Conversation.create({
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller,
      readByBuyer: !req.isSeller,
    });

    res.status(201).json(savedCon);
  } catch (error) {
    return next(error);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) {
      return next(createError(404, "Conversation not found"));
    }
    res.status(200).json(conversation);
  } catch (error) {
    return next(error);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversations = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // readByBuyer: req.isSeller,
          // readByBuyer: !req.isSeller,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );
    res.status(200).json(updatedConversations);
  } catch (error) {
    return next(error);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(201).json(conversations);
  } catch (error) {
    return next(error);
  }
};
