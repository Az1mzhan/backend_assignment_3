import "dotenv/config";
import express from "express";
import path from "path";
import postRouter from "./post-api/postRouter.js";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/blogs", postRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hkyup9h.mongodb.net/?retryWrites=true&w=majority`
    );

    app.listen(port, () => {
      console.info(
        `The server has been successfully started on the port: ${port}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

await start();
