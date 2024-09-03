import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { commentPost, createPost, deletePost, getAllPosts, likedPosts, likeUnlikePost } from "../controllers/post.controller.js";

const router = express.Router()

router.get("/all",protectRoute,getAllPosts)
router.get("/likes/:id",protectRoute,likedPosts)
router.post("/create",protectRoute,createPost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentPost)
router.delete("/:id",protectRoute,deletePost)

export default router