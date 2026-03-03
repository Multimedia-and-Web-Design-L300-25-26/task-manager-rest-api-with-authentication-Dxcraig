import { MongoMemoryServer } from "mongodb-memory-server";

export default async function globalSetup() {
  const mongoServer = await MongoMemoryServer.create();
  process.env.MONGO_URI_TEST = mongoServer.getUri();
  global.__MONGOD__ = mongoServer;
}
