import { Router } from "express";
import adminController from "../controllers/admin.js";
import Admin from "../models/users/Admin.js";
const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from Admin");
});

router.post("/register", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const { username, password } = req.body;
    await adminController.create(username, password);

    const token = await adminController.show(username, password);
    res.send(token);
  } catch ({ message }) {
    res.status(400).json(message);
  }
});

export default router;
