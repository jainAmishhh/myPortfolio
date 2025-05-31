import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const connectToDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/ContactInfoDetails`,
    );
    console.log(
      `\nMongoDb connected ! DB host: ${connectToDB.connection.host}`,
    );
  } catch (error) {
    console.error(`MongoDB connection Error `, error);
  }
};

export default connectToMongoDB;
