import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from Students");
});

export default router;
