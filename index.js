import express from "express";
import dotenv from "dotenv";
import connection from "./shared/db/connection.js";
import router from "./modules/routes/question-route.js";

const app = express();
dotenv.config();

app.use(express.json());

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
