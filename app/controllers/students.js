import { ObjectId as objectId } from "mongodb";
import client from "../client.js";
import config from "../config.js";

const students = client.db(config.db.name).collection("students");

export default {
  index() {
    return students.find().toArray();
  },
  show(id) {
    return students.findOne({ _id: objectId(id) });
  },
  async update(id, grade) {
    const studentQuery = {
      _id: objectId(id),
      "grades._id": objectId(grade.id),
    };
    const updateGrade = {
      $set: { "grades.$.pointsEarned": grade.pointsEarned },
    };
    return students.updateOne(studentQuery, updateGrade);
  },
};
