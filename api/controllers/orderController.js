import Gig from "../models/gigModel.js";
import Order from "../models/orderModel.js";
import Stripe from "stripe";

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).send(orders);
  } catch (error) {
    return next(error);
  }
};

export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const gig = await Gig.findById(req.params.id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "inr",
    description: "Gig marketplace service",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  await Order.create({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      {
        $set: {
          isCompleted: true,
        },
      }
    );
    res.status(200).send("order has been confirmed");
  } catch (error) {
    return next(error);
  }
};
