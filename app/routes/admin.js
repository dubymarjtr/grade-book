import { Router } from "express";
import adminController from "../controllers/admin.js";
const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from Admin");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    await adminController.create(username, password);

    const token = await adminController.show(username, password);
    res.send(token);
  } catch ({ message }) {
    res.status(400).json(message);
  }
});

export default router;
