// importing express and other important files
import dotenv from "dotenv";
import { app } from "./app.js";
import connectToMongoDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

// port
const PORT = process.env.PORT || 5000;

console.log("Starting the server");

connectToMongoDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running at the PORT: ${PORT}`);
    }),
  )
  .catch((err) => {
    console.error("MongoDb connection error!");
  });
