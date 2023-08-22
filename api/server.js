import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import orderRoute from "./routes/orderRoute.js";
import messageRoute from "./routes/messageRoute.js";
import gigRoute from "./routes/gigRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

//Origins is set to localhost. Modify according to your frontend url
app.use(cors({ origin: process.env.BASE_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrongs";
  return res.status(errorStatus).send(errorMessage);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on the ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
