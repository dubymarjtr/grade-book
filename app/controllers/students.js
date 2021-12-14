import client from "../client.js";
import config from "../config.js";

const students = client.db(config.db.name).collection("students");

export default {
  index() {
    return students.find().toArray();
  },
};
