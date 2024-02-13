const connectionString =
  "mongodb+srv://jcvborlagdan1:6LbA10cATDiwNo7l@cluster0.k3w4sak.mongodb.net/Marketplace?retryWrites=true&w=majority";

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    connectionString ||
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};

export default config;
