import express from 'express';
import { 
    login,
    logout, 
    signup, 
    verifyEmail, 
    forgotPassword, 
    resetPassword,
    checkAuth, 
    getUserRole,
    getOtherUsers
} from '../controllers/auth.controller.js';
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.get("/getRole", verifyToken, getUserRole);
router.get("/chat",verifyToken, getOtherUsers);

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;