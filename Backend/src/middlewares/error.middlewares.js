import mongoose from "mongoose";
import { APIerror } from "../utils/APIerror.js";

const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err); // Always log errors for debugging

  let error = err;

  // If the error isn't an instance of APIerror, wrap it
  if (!(error instanceof APIerror)) {
    const statusCode = err?.statusCode || (err instanceof mongoose.Error ? 400 : 500);
    const message = err?.message || "Something went wrong";

    error = new APIerror(statusCode, message, err?.errors || [], err?.stack);
  }

  // Construct the response object
  const response = {
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack })
  };

  // Use a fallback in case statusCode is missing
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json(response);
};

export { errorHandler };
