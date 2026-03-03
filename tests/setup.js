import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  const uri = process.env.MONGO_URI_TEST || process.env.MONGO_URI;
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});
