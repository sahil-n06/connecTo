import jwt from "jsonwebtoken";

export const verifyToken =(req, res, next)=>{
    const token = req.cookies.token;
    if(!token)
        return res.status(401).json({ success: false, message: "unauthorized no token provided"});
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded)
            return res.status(403).json({ success: false, message: "invalid token"});
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(403).json({ success: false, message: "forbidden, token expired or invalid" });        
    }
}