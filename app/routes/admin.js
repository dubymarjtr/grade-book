import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from Admin");
});

export default router;
