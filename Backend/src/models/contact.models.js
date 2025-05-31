import mongoose, { mongo, Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    trim: true,
  },
  services: {
    type: String,
    default: "Not specified",
  },
  aboutProject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
    default: "",
  },
});

export const contactMe = mongoose.model("contactMe", contactSchema);
