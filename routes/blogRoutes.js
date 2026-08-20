import { CreateBlog, getAllBlogs, UpdateBlog } from "../controllers/blogControllers.js";
import express from "express"
import { verifyToken } from "../middleware/authMiddleware.js";
import { upload } from "../config/file.js";

const router = express.Router()


router.get("/getAll", getAllBlogs);
router.post("/create",upload.single("blogImage"), CreateBlog);


router.put("/update/:id", UpdateBlog);

export default router
