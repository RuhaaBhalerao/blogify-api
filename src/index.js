import express from "express";
import postsRouter from "./routes/posts.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
