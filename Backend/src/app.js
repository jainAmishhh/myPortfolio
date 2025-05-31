import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middlewares.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// custome middleware
app.use((req, res, next) =>{
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

// routes 
import contactRoutes from "./routes/contact.routes.js"

app.use("", contactRoutes);

app.use(errorHandler);
 
export { app };
