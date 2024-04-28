const express = require("express");
const homePageControllers = require("../controllers/homePageControllers");
const { validateUser } = require("../controllers/validateUser");
const { sendError } = require("../controllers/sendError");
const { sendSuccess } = require("../controllers/sendsuccess");

const router = express.Router();

router.get("/", homePageControllers);
router.get("/error", sendError);
router.get("/success", sendSuccess);
router.post("/submit", validateUser);

module.exports = router;