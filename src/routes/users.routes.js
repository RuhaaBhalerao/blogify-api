// src/routes/users.routes.js
import express from "express";

const router = express.Router();

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).json({
    message: `You requested data for User ID: ${userId}`
  });
});

export default router;
