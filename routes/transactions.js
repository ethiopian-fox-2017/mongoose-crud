const express = require("express");
const router = express.Router();
const db = require("../models/transactions_model")
const transactionController = require("../controllers/transactions_controller")

router.post("/", transactionController.addTransaction)
router.get("/", transactionController.dataTransaction)
router.post("/update/:id", transactionController.updateTransaction)
router.get("/remove/:id", transactionController.removeTransaction)

module.exports = router
