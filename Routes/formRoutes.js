const express = require("express");
const router = express.Router();
const Form = require('../models/Form')

router.post("/submitForm", async (req, res) => {
  const { name, email, question, response } = req.body;
  try {
    const newFormData = new Form({ name, email, question, response });
    await newFormData.save();
    res.status(201).json({ message: "Form data submitted successfully." });
  } catch (err) {
    console.error("Error submitting form data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/getFormData", async (req, res) => {
  try {
    const formData = await Form.find({}, "-_id -__v");
    res.json(formData);
  } catch (err) {
    console.error("Error fetching form data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/previewForm", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html")); 
});

module.exports = router;
