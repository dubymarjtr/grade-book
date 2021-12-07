import express from "express";
import config from "./config.js";
import router from "./routes/index.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/api", router);

app.listen(config.port, () => {
  console.log(`Server running: ${config.baseUrl}:${config.port}`);
});
