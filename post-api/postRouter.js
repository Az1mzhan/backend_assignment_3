import PostController from "./PostController.js";
import { Router } from "express";

const postRouter = new Router();

postRouter
  .route("/")
  .get(PostController.getPosts)
  .post(PostController.createPost);

postRouter
  .route("/:id")
  .get(PostController.getPost)
  .put(PostController.updatePost)
  .delete(PostController.deletePost);

export default postRouter;
