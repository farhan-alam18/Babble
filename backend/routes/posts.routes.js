import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { commentPost, createPost, deletePost, followingPosts, getAllPosts, likedPosts, likeUnlikePost, userPosts } from "../controllers/post.controller.js";

const router = express.Router()

router.get("/all",protectRoute,getAllPosts)
router.get("/likes/:id",protectRoute,likedPosts)
router.get("/following",protectRoute,followingPosts)
router.get("/user/:username", protectRoute, userPosts)
router.post("/create",protectRoute,createPost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentPost)
router.delete("/:id",protectRoute,deletePost)

export default router