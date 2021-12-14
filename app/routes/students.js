import { Router } from "express";
import studentsController from "../controllers/students.js";
import isAuth from "../middleware/isAuth.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  if (req.isAuth) {
    const students = await studentsController.index();
    res.json(students);
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

export default router;
