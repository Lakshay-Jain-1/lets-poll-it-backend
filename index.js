import express from "express";
import dotenv from "dotenv";
import connection from "./shared/db/connection.js";
import router from "./modules/routes/question-route.js";
import cors from "cors";
import loginRouter from "./shared/login/authentication.js";
import signupRouter from "./shared/signup/signup.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();    

app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:5173", "https://polling-frontend-97zb.onrender.com" ,"http://localhost:5174"],
  optionsSuccessStatus: 200,
  credentials:true
};

app.use(cookieParser())


app.use(cors(corsOptions));

app.use("/login",loginRouter)
app.use("/signup",signupRouter)
app.use("/api/question", router);  


let port = process.env.PORT || 5555;

let promise = connection;
promise()
  .then(() => {
    app.listen(port, () => {
      console.log("Server Is Connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
