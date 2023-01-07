const { Router } = require("express");
const router = Router();

const utilsController = require("../controllers/utilsController");

// GET REQUEST:
router.get("/books", utilsController.getBooks);

// POST REQUEST:
router.post("/contact", utilsController.postContact);

module.exports = router;
