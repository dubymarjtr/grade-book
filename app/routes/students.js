import { Router } from "express";
import studentsController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", async ({ isAuth }, res) => {
  if (isAuth.role === "ADMIN") {
    try {
      const students = await studentsController.index();
      res.json(students);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

export default router;
