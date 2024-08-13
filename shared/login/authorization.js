import { verifyToken } from "../Token/token.js";

export default function authorization(req, res, next) {
 
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.json({ authorization: false, message: "No token provided" });
    }
     const data = verifyToken(token);
    next()
  
  } catch (err) {
    res.json({ authorization: false, message: 'Invalid or expired token' });   
  }
 
}
