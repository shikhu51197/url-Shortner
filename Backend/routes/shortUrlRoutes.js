import express from "express";
const router = express.Router();
import { shortenUrl, redirectUrl } from "../controllers/shortUrlController.js";
import { authenticateUser } from "./../middleware/authmiddle.js";

router.post("/shorten", shortenUrl, authenticateUser);
router.get("/:hash", redirectUrl);
export default router;
