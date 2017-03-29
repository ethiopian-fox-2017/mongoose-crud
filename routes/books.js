const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books_controller");

router.post("/", bookController.createBook)
router.get("/", bookController.dataBook)
router.post("/update/:id", bookController.updateBook)
router.get("/remove/:id", bookController.removeBook)

module.exports = router
