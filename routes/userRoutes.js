
import express from "express"
import { CreateUser, getAllUsers, login } from "../controllers/userControllers.js";

const router = express.Router()


router.get("/getAll", getAllUsers);
router.post("/create", CreateUser);
router.post("/login", login);




export default router
