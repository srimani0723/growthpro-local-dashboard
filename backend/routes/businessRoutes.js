const express = require("express");
const { businessData, generateHeadline } = require("../controllers/businessController");
const router = express.Router()

// routes for the generating business data and random headline
router.post("/business-data",businessData)
router.get("/regenerate-headline",generateHeadline)

module.exports = router;