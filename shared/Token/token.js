import jwt from "jsonwebtoken"



function generateToken(string){
    return jwt.sign(string,process.env.Pvt_Key)
}



function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.Pvt_Key);
    return decoded;
  } catch (err) {
   
    throw new Error('Token verification failed');
  }
}



export {generateToken,verifyToken}