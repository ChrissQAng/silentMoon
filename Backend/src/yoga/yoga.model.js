import mongoose from "mongoose";

const yogaSchema = new mongoose.Schema(
  {
    fileUrl: { type: String },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Expert"] },
    duration: { type: String, require: true },
    category: { type: String, enum: ["All", "Anxious", "Sleep", "Kids"] },
  },
  { collection: "yogas", timestamps: true },
);

export const Yoga = mongoose.model("Yoga", yogaSchema);
