import { Router } from "express";
import { createStory, getStories } from "../controllers/stories.js";
const router = Router();

router.get("/", getStories);
router.post("/", createStory);
export default router;
