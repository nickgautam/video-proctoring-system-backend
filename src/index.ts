import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

await connectDb()

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Server is running",
    url: req.originalUrl,
    method: req.method
  });
});

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
