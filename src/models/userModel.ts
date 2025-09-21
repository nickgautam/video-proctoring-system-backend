import mongoose, { Document } from "mongoose";

interface userSchemaTypes extends Document {
  name: string;
  email: string;
  password: string;
  role: "teacher" | "student";
}

const userSchema = new mongoose.Schema<userSchemaTypes>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ["teacher", "student"], trim: true },
  },
  { timestamps: true }
);

const userModel = mongoose.model<userSchemaTypes>("User", userSchema);

export default userModel;
