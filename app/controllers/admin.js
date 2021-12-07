import client from "../client.js";
import config from "../config.js";
import bcrypt from "bcrypt";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create(username, password) {
    const existingUser = await admin.findOne({ username });

    // Check if user already exists
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and insert into database
    return admin.insertOne({ username, password: hashedPassword });
  },
};
