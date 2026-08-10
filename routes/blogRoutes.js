import { CreateBlog, getAllBlogs, UpdateBlog } from "../controllers/blogControllers.js";
import express from "express"

const router = express.Router()


router.get("/getAll", getAllBlogs);
router.post("/create", CreateBlog);


router.put("/update/:id", UpdateBlog);

export default router
