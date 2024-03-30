import mongoose from "mongoose";
const storySchema = mongoose.Schema({
  caption: { type: String, require: true },
  username: { type: String, require: true },
  userId: { type: String, require: true },
  image: { type: String, require: true },
  tags: { type: String, require: true },
  likes: { type: String, require: true },
  postDate: { type: String, require: true },
});

export default mongoose.model("Story", storySchema);
