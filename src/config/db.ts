import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log('MongoDb connected successfully')
    return await mongoose.connect(process.env.MONGO_URI as string);
  } catch (err: unknown) {
    console.log(err);
  }
};
