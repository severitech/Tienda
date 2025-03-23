import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById
} from "../controller/userController.js";

const router = Router();

router.get("/user", getUsers);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id",getUserById)

export default router;
