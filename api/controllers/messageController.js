import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const createMessage = async (req, res, next) => {
  try {
    const newMessage = await Message.create({
      conversationId: req.body.conversationId,
      userId: req.userId,
      desc: req.body.desc,
    });
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(201).send(newMessage);
  } catch (error) {
    return next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
  } catch (error) {
    return next(error);
  }
};
