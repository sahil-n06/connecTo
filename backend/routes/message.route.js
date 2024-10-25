import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.route('/send/:userId').post(verifyToken, sendMessage);
router.route('/:userId').get(verifyToken, getMessage);
export default router;