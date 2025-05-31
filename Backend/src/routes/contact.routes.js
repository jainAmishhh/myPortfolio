import { Router } from "express";
import { shareInfo } from "../controllers/contact.controllers.js";

const router = Router();

router.route("/contactMe").post(shareInfo);

export default router;