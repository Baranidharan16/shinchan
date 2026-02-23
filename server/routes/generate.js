const express = require("express");
const router = express.Router();
const { generateCreative } = require("../services/aiService");

router.post("/generate", async (req, res) => {
  try {
    const data = req.body;
    const result = await generateCreative(data);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Generation failed" });
  }
});

module.exports = router;
