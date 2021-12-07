import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

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

  async show(username, password) {
    const user = await admin.findOne({ username });

    if (!user) {
      throw new Error("Login unsuccessful");
    }

    // Check if password is correct
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Login unsuccessful");
    }

    return jwt.sign({ username }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
    });
  },
};
