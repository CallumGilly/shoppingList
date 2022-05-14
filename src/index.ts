import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send(`Hello There World`);
});

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
})