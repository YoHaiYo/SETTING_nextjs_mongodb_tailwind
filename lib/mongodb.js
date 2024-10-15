import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서는 기존의 클라이언트를 재사용해요!
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션에서는 새로운 클라이언트를 사용해요!
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
