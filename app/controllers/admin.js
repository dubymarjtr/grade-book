import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  create(username, password) {
    console.log(username, password, "from admin controller");
  },
};
