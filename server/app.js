import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import storyRoutes from "../server/routes/stories.js";

const app = express();
app.use(bodyParser.json({ limit: "32mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: "true" }));
app.use(cors());

app.use("/stories", storyRoutes);
const MONGO_URI =
  "mongodb+srv://jannat:Mongodb11@cluster0.kn6kloc.mongodb.net/";
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`SERVER LISTENING ON PORT :${PORT}`);
    });
  } catch (err) {
    console.log("connection failed ");
  }
};

connectDB();
mongoose.connection.on("open", () => {
  console.log("Connection db success");
});
mongoose.connection.on("error", (err) => console.error(err));
