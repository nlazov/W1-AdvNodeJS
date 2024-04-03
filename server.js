import "dotenv/config";
import express from "express";
import cors from "cors";
import mainRouter from "./src/consts/router.const.js";
import { connect } from "mongoose";
import { MONGO_URI } from "./src/consts/db.const.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`Made API call to ${req.method}: ${req.url} on ${new Date().toISOString()}`);
	next();
});

app.use("/api", mainRouter);

connect(MONGO_URI).then(() => {
    app.listen(process.env.PORT, process.env.HOSTNAME, () => {
        console.log(`The server is listening on http://${process.env.HOST}:${process.env.PORT}`);
    });
}).catch((err) => console.log("DB connection issue", { err }));
